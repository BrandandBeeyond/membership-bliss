import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '../../../components/Typography';
import { logoutUser } from '../../../redux/actions/UserAction';
import { persistor } from '../../../redux/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const ProfileScreen = ({ navigation }) => {
  const [loadingLogout, setLoadingLogout] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      setLoadingLogout(true);

      await GoogleSignin.signOut();

      setTimeout(() => {
        dispatch(logoutUser());
        setLoadingLogout(false);
      }, 2000);

      persistor.purge();

      navigation.reset({
        index: 0,
        routes: [{ name: 'AuthScreen' }],
      });
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  const { user } = useSelector(state => state.user);

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <ScrollView>
        {/* Header */}

        {/* Profile Image */}
        <View style={styles.profileWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../../../assets/images/user.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <IconButton icon="pencil" size={14} iconColor="#fff" />
            </TouchableOpacity>
          </View>

          <Typography
            variant="h6"
            weight="MSemiBold"
            color="#242323ff"
            style={globalStyle.mt10}
          >
            {user?.fullname}
          </Typography>
        </View>

        {/* Inputs */}
        <View style={styles.form}>
          <Text style={styles.label}>Your Email</Text>
          <TextInput
            mode="outlined"
            value={user?.email || ''}
            editable={false}
            left={<TextInput.Icon icon="email-outline" />}
            outlineColor="#b0aeaeff"
            activeOutlineColor="#588650ff"
            outlineStyle={{
              borderRadius: horizontalScale(12),
            }}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            mode="outlined"
            value={user?.phone || ''}
            left={<TextInput.Icon icon="phone-outline" />}
            outlineColor="#b0aeaeff"
            activeOutlineColor="#588650ff"
            outlineStyle={{
              borderRadius: horizontalScale(12),
            }}
          />

          <Text style={styles.label}>Website</Text>
          <TextInput
            mode="outlined"
            value="www.touchwoodbliss.com"
            left={<TextInput.Icon icon="web" />}
            outlineColor="#b0aeaeff"
            activeOutlineColor="#588650ff"
            outlineStyle={{
              borderRadius: horizontalScale(12),
            }}
          />

          <View style={globalStyle.mt50}>
            <Button
              mode="contained"
              onPress={handleLogout}
              loading={loadingLogout}
              disabled={loadingLogout}
              contentStyle={{ height: 50 }}
              style={{ borderRadius: 10, backgroundColor: '#2d532c' }}
              labelStyle={{ color: '#fff', fontWeight: '600' }}
            >
              Logout
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileWrapper: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },

  imageWrapper: {
    position: 'relative',
  },

  profileImage: {
    width: horizontalScale(122),
    height: verticalScale(100),
    borderRadius: horizontalScale(100),
    backgroundColor: '#eee',
  },

  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2c3a1fff',
    borderRadius: 16,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },

  role: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },

  form: {
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 13,
    marginBottom: 6,
    marginTop: 12,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
  },

  logoutBtn: {
    marginTop: 30,
    borderColor: '#2c3a1fff',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 6,
  },

  logoutText: {
    color: '#2c3a1fff',
    fontSize: 15,
    fontWeight: '500',
  },
});

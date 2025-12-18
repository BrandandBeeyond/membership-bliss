import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Typography from '../../../components/Typography';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import MenuTabs from '../../../components/MenuTabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/actions/UserAction';
import { persistor } from '../../../redux/store';
import LinearGradient from 'react-native-linear-gradient';
import { verticalScale } from '../../../../assets/styles/Scaling';
import { useState } from 'react';

const MoreScreen = ({ navigation }) => {
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

  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <View style={globalStyle.mt10}>
        <Typography
          variant="caption"
          color="#656363ff"
          style={globalStyle.mb10}
        >
          General
        </Typography>
        <View style={[globalStyle.column, { columnGap: 15 }]}>
          <MenuTabs
            iconName="user-o"
            label="Profile"
            onPress={() => {
              navigation.push('ProfileScreen');
            }}
          />
          <MenuTabs
            iconName="information-circle-outline"
            label="About Us"
            onPress={() => {
              navigation.push('AboutScreen');
            }}
          />
          <MenuTabs
            iconName="reader-outline"
            label="Bookings"
            onPress={() => {}}
          />
          <MenuTabs
            iconName="headset-outline"
            label="Contact Us"
            onPress={() => {
              navigation.push('ContactScreen');
            }}
          />
          <MenuTabs
            iconName="help-circle-outline"
            label="FAQs"
            onPress={() => navigation.push('FAQs')}
          />
          <MenuTabs
            iconName="share-social-outline"
            label="Share"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={globalStyle.mt10}>
        <Typography
          variant="caption"
          color="#656363ff"
          style={globalStyle.mb10}
        >
          Security
        </Typography>
        <View style={[globalStyle.column, { columnGap: 15 }]}>
          <MenuTabs
            iconName="shield-checkmark-outline"
            label="Terms & Conditions"
            onPress={() => {}}
          />
          <MenuTabs
            iconName="log-out-outline"
            label="Logout"
            loading={loadingLogout}
            onPress={handleLogout}
          />
        </View>
      </View>

      <LinearGradient
        pointerEvents="none"
        colors={[
          'transparent',
          'rgba(232, 255, 226, 0.4)',
          'rgba(188, 218, 181, 0.4)',
        ]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: verticalScale(100),
        }}
      />
    </SafeAreaView>
  );
};

export default MoreScreen;

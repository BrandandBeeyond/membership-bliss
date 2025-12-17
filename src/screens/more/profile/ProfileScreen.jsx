import React from 'react';
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
import { verticalScale } from '../../../../assets/styles/Scaling';

const ProfileScreen = () => {
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
              source={{
                uri: 'https://i.imgur.com/0y8Ftya.png', // replace with your image
              }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <IconButton icon="pencil" size={14} iconColor="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>GFXAgency</Text>
          <Text style={styles.role}>UI UX DESIGN</Text>
        </View>

        {/* Inputs */}
        <View style={styles.form}>
          <Text style={styles.label}>Your Email</Text>
          <TextInput
            mode="outlined"
            value="xxx@gmail.com"
            editable={false}
            left={<TextInput.Icon icon="email-outline" />}
            style={styles.input}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            mode="outlined"
            value="+93123135"
            left={<TextInput.Icon icon="phone-outline" />}
            style={styles.input}
          />

          <Text style={styles.label}>Website</Text>
          <TextInput
            mode="outlined"
            value="www.gfx.com"
            left={<TextInput.Icon icon="web" />}
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            mode="outlined"
            value="xxxxxxxx"
            secureTextEntry
            left={<TextInput.Icon icon="lock-outline" />}
            right={<TextInput.Icon icon="eye-off-outline" />}
            style={styles.input}
          />

          {/* Logout Button */}
          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.logoutBtn}
            labelStyle={styles.logoutText}
          >
            Logout
          </Button>
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
    width: verticalScale(100),
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
  },

  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF7A00',
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
    borderColor: '#FF7A00',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 6,
  },

  logoutText: {
    color: '#FF7A00',
    fontSize: 15,
    fontWeight: '500',
  },
});

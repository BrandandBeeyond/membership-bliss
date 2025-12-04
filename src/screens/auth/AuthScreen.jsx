import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../../components/Typography';
import { Button, Divider, TextInput, Portal, Dialog } from 'react-native-paper';
import GoogleSigninButton from '../../components/GoogleSignButton';
import { horizontalScale } from '../../../assets/styles/Scaling';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { googleLoginAction } from '../../redux/actions/UserAction';
import Loader from '../../components/Loader';

const ExploreTitle = ({ onExplorePress }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex',
        paddingLeft: horizontalScale(240),
      }}
    >
      <TouchableOpacity onPress={onExplorePress}>
        <Typography variant="caption" color="#000" weight="normal">
          Explore
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState('');
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const openGuestPopup = () => setShowGuestPopup(true);
  const closeGuestPopup = () => setShowGuestPopup(false);

  const continueAsGuest = () => {
    closeGuestPopup();
    navigation.replace('HomeTabs');
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ExploreTitle onExplorePress={openGuestPopup} />,
      headerStyle: { elevation: 0, shadowOpacity: 0 },
    });
  }, [navigation]);

  const handleGoogleLogin = async () => {
    try {
     

      await GoogleSignin.hasPlayServices();

      const SignIndata = await GoogleSignin.signIn();

      const idToken = SignIndata.data?.idToken;
      navigation.navigate('LoadingScreen');

      await new Promise((resolve) => setTimeout(resolve, 200));

      await dispatch(googleLoginAction(idToken));


      navigation.replace('HomeTabs');
    } catch (error) {
      console.log('Google login failed:', error);
      setLoading(false);
    }
  };

 

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.bgwhite]}>
      <ScrollView contentContainerStyle={[globalStyle.px20, globalStyle.py30]}>
        <View
          style={[globalStyle.dflex, globalStyle.alignCenter, globalStyle.mb20]}
        >
          <Image
            source={require('../../../assets/images/blisslogo.png')}
            style={{ height: 100, width: 100, objectFit: 'contain' }}
          />
        </View>
        <Typography
          variant="h4"
          color="#1e1e1eff"
          weight="SemiBold"
          style={[globalStyle.my10, globalStyle.textCenter]}
        >
          Welcome to Touchwood Bliss
        </Typography>
        <Typography
          variant="subtext"
          color="#1e1e1eff"
          style={[globalStyle.mb10, globalStyle.textCenter]}
        >
          Login to continue to your membership account
        </Typography>

        <TextInput
          label="Mobile Number"
          mode="outlined"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
          style={[globalStyle.my10, globalStyle.authInput]}
          theme={{
            roundness: horizontalScale(22),
            colors: {
              placeholder: '#bbbbbb',
              primary: '#2d7828',
              outline: '#add5aaff',
            },
          }}
        />

        <Button
          mode="contained"
          buttonColor="#689d58ff"
          textColor="#fff"
          disabled={mobile.length !== 10}
          style={[
            globalStyle.mb20,
            globalStyle.mt20,
            globalStyle.py3,
            { borderRadius: horizontalScale(22) },
          ]}
        >
          Send OTP
        </Button>
        <View style={{ marginVertical: 50 }}>
          <Divider />
          <Text
            style={{
              textAlign: 'center',
              marginTop: -10,
              backgroundColor: '#ffffffff',
              alignSelf: 'center',
              paddingHorizontal: 10,
              color: '#8c8c8c',
            }}
          >
            OR
          </Text>
        </View>

        <View style={[globalStyle.mt10]}>
          <GoogleSigninButton onPress={handleGoogleLogin} />
        </View>
      </ScrollView>

      <Portal>
        <Dialog visible={showGuestPopup} onDismiss={closeGuestPopup}>
          <Dialog.Title style={{ fontSize: 20, color: '#202b0dff' }}>
            Continue as Guest
          </Dialog.Title>

          <Dialog.Content>
            <Text>
              You will access the app as a guest user. You can log in anytime
              for full membership benefits.
            </Text>
          </Dialog.Content>

          <Dialog.Actions>
            <Button textColor="#2e2d2dff" onPress={closeGuestPopup}>
              Cancel
            </Button>
            <Button textColor="#65852eff" onPress={continueAsGuest}>
              Continue
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

export default AuthScreen;

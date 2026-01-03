import React, { useState, useEffect, useRef } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../../components/Typography';
import { Button, Divider, TextInput, Portal, Dialog } from 'react-native-paper';
import GoogleSigninButton from '../../components/GoogleSignButton';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/styles/Scaling';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import {
  googleLoginAction,
  sendOtpAction,
} from '../../redux/actions/UserAction';
import LinearGradient from 'react-native-linear-gradient';

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

const AuthScreen = ({ navigation, route }) => {
  const { redirectTo, plan } = route.params || {};

  const dispatch = useDispatch();
  const [mobile, setMobile] = useState('');
  const mobileInputRef = useRef();
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { otpSent } = useSelector(state => state.user);

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

  useEffect(() => {
    if (mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, []);

  const handleSendOtp = async () => {
    try {
      setLoadingOtp(true);

      const res = await dispatch(sendOtpAction(mobile));

      if (res?.success) {
        navigation.navigate('OtpScreen', { phone: mobile, redirectTo, plan });
      } else {
        console.log('Failed to send OTP');
      }
    } catch (error) {
      console.log('Send OTP Error:', error);
    } finally {
      setLoadingOtp(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      const idToken = userInfo?.data?.idToken;

      console.log('this is token', idToken);

      navigation.navigate('LoadingScreen');

      await new Promise(resolve => setTimeout(resolve, 200));

      await dispatch(googleLoginAction(idToken));

      if (redirectTo) {
        navigation.replace(redirectTo, { plan });
      } else {
        navigation.replace('HomeTabs');
      }
    } catch (error) {
      console.log('Google login failed:', error);
      setGoogleLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={[
        globalStyle.flex,
        globalStyle.relative,
        { backgroundColor: '#fdfcf8' },
      ]}
    >
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
          variant="h3"
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
          ref={mobileInputRef}
          label="Mobile Number"
          mode="outlined"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
          style={[globalStyle.my10]}
          contentStyle={{
            height: verticalScale(32),
            lineHeight: verticalScale(17),
          }}
          outlineColor="#cbc8c8ff"
          activeOutlineColor="#588650ff"
          outlineStyle={{
            borderRadius: horizontalScale(12),
            paddingHorizontal: horizontalScale(10),
          }}
        />

        <LinearGradient
          colors={
            mobile.length === 10
              ? ['#9fbe78', '#6f9c5a']
              : ['#e5e5e5', '#e5e5e5']
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: horizontalScale(12),
            marginTop: verticalScale(10),
            marginBottom: verticalScale(10),
          }}
        >
          <Button
            mode="contained"
            onPress={handleSendOtp}
            loading={loadingOtp}
            disabled={mobile.length !== 10 || loadingOtp}
            contentStyle={{
              height: verticalScale(32),
            }}
            style={{
              backgroundColor: 'transparent',
              borderRadius: horizontalScale(14),
            }}
            labelStyle={{
              fontSize: scaleFontSize(15),
              fontWeight: '600',
              color: mobile.length === 10 ? '#ffffff' : '#9e9e9e',
            }}
          >
            Send OTP
          </Button>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: verticalScale(14),
          }}
        >
          {/* Left Line */}
          <View
            style={{
              flex: 1,
              height: verticalScale(0.6),
              backgroundColor: '#cdd8c0',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: horizontalScale(10),
              backgroundColor: '#fdfcf8',
            }}
          >
            <Text
              style={{
                fontSize: scaleFontSize(13),
                color: '#7a7a7a',
                fontWeight: '500',
              }}
            >
              OR
            </Text>
          </View>

          {/* Right Line */}
          <View
            style={{
              flex: 1,
              height: verticalScale(0.6),
              backgroundColor: '#cdd8c0',
            }}
          />
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

      <Image
        source={require('../../../assets/images/loginmountains.png')}
        resizeMode="cover"
        style={[
          globalStyle.absolute,
          {
            height: verticalScale(120),
            width: '100%',
            bottom: verticalScale(-20),
            left: horizontalScale(0),
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default AuthScreen;

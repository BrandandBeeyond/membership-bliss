import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { Image, Pressable, ScrollView, View } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import Typography from '../../../components/Typography';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import OtpInput from './OtpInput';
import { useDispatch } from 'react-redux';
import { verifyOtpAction } from '../../../redux/actions/UserAction';

const OtpScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { phone, redirectTo, plan } = route.params;
  const [otpValue, setOtpValue] = useState('');

  const [loadingVerifyOtp, setLoadingVerifyOtp] = useState(false);

  const handleOTPVerify = async () => {
    try {
      setLoadingVerifyOtp(true);
      if (otpValue.length !== 6) return;

      const res = await dispatch(verifyOtpAction(phone, otpValue));

      console.log('res verify otp', res);

      if (!res?.user.profileCompleted) {
        navigation.replace('Signupscreen', { phone: phone, redirectTo, plan });
        return;
      }

      if (redirectTo) {
        navigation.replace(redirectTo, { plan });
      } else {
        navigation.replace('HomeTabs');
      }
    } catch (error) {
      console.log('OTP Verification Error:', error);
    } finally {
      setLoadingVerifyOtp(false);
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
            source={require('../../../../assets/images/blisslogo.png')}
            style={{ height: 100, width: 100, objectFit: 'contain' }}
          />
        </View>
        <Typography
          variant="h3"
          color="#1e1e1eff"
          weight="SemiBold"
          style={[globalStyle.my10, globalStyle.textCenter]}
        >
          Enter Verification Code
        </Typography>
        <Typography
          variant="fthead"
          color="#1e1e1eff"
          style={[globalStyle.mb10, globalStyle.textCenter]}
        >
          We have Sent 6-digit verification code to
        </Typography>
        <View
          style={[
            globalStyle.row,
            globalStyle.cg15,
            globalStyle.jusifyCenter,
            globalStyle.alignCenter,
          ]}
        >
          <Typography
            variant="h4"
            color="#1e1e1eff"
            weight="SemiBold"
            style={[globalStyle.mb10, globalStyle.textCenter]}
          >
            +91 - {phone}
          </Typography>
          <Pressable onPress={() => navigation.replace('AuthScreen')}>
            <SimpleLineIcons
              name="pencil"
              color="#509554ff"
              size={18}
              style={{ marginTop: verticalScale(-8) }}
            />
          </Pressable>
        </View>
        <Typography
          variant="fthead"
          color="#1e1e1eff"
          style={[globalStyle.mb10, globalStyle.textCenter]}
        >
          Please enter the code below to verify your number.
        </Typography>

        <OtpInput onOtpChange={setOtpValue} />

        <LinearGradient
          colors={
            otpValue.length !== 6
              ? ['#e5e5e5', '#e5e5e5']
              : ['#9fbe78', '#6f9c5a']
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
            disabled={otpValue.length !== 6 || loadingVerifyOtp}
            loading={loadingVerifyOtp}
            onPress={handleOTPVerify}
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
              color: otpValue.length === 6 ? '#ffffff' : '#9e9e9e',
            }}
          >
            Verify OTP
          </Button>
        </LinearGradient>

        <Typography
          variant="fthead"
          color="#1e1e1eff"
          style={[globalStyle.mb10, globalStyle.textCenter]}
        >
          Didn't receive the code ?
        </Typography>

        <Typography
          variant="h5"
          weight="SemiBold"
          color="#234a1bff"
          style={[globalStyle.mb10, globalStyle.textCenter]}
        >
          Resend Code
        </Typography>
      </ScrollView>
      <Image
        source={require('../../../../assets/images/loginmountains.png')}
        resizeMode="cover"
        style={[
          globalStyle.absolute,
          {
            height: verticalScale(120),
            width: '100%',
            bottom: verticalScale(0),
            left: horizontalScale(0),
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;

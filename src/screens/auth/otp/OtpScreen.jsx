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

const OtpScreen = ({ navigation, route }) => {
  const { phone } = route.params;
  const [otpValue, setOtpValue] = useState('');

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
            disabled={otpValue.length !== 6}
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
            }}
            onPress={() => {
              console.log('OTP:', otpValue);
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
            bottom: verticalScale(20),
            left: horizontalScale(0),
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;

import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Typography from '../../../components/Typography';
import { Button } from 'react-native-paper';

const VoucherCodeSuccess = ({ otpCode, onClose }) => {
  const [digits, setDigits] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(600);
  const timerRef = useRef(null);
 

  useEffect(() => {
    if (otpCode) {
      const arr = otpCode.split('').slice(0, 6);
      setDigits(arr);
    }
  }, [otpCode]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = sec => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <ScrollView style={[globalStyle.flex]} showsVerticalScrollIndicator={false}>
      <View style={[{ padding: horizontalScale(20) }]}>
        <Typography
          variant="h4"
          weight="Bold"
          color="#4c5d49ff"
          style={[globalStyle.textCenter]}
        >
          Coupon Redeemed Successfully !
        </Typography>
        <View
          style={[
            globalStyle.row,
            {
              gap: horizontalScale(5),
              marginTop: verticalScale(15),
              marginBottom: verticalScale(30),
            },
          ]}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} style={globalStyle.otpBox}>
              <Typography style={globalStyle.otpDigit} weight="MSemiBold">
                {digits[i] || ''}
              </Typography>
            </View>
          ))}
        </View>

        <Typography
          weight="Bold"
          color="#3e4e31ff"
          variant="fthead"
          style={globalStyle.textCenter}
        >
          Time Left: {formatTime(secondsLeft)}
        </Typography>

        <View
          style={[
            globalStyle.jusifyCenter,
            globalStyle.alignCenter,
            globalStyle.mt20,
          ]}
        >
          <Typography
            weight="Medium"
            color="#575e51ff"
            variant="subhead"
            style={globalStyle.textCenter}
          >
            Please verify this OTP with resort counter staff (admin)
          </Typography>
          <Typography
            weight="SemiBold"
            color="#575e51ff"
            variant="fthead"
            style={globalStyle.mt10}
          >
            The OTP is valid for 10 mins.
          </Typography>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: horizontalScale(12),
          marginVertical: verticalScale(24),
        }}
      >
        <Button
          mode="outlined"
          onPress={onClose}
          textColor="#2b3527ff"
          style={{
            flex: 1,
            borderRadius: 30,
            height: verticalScale(35),
            justifyContent: 'center',
          }}
          labelStyle={{
            fontSize: scaleFontSize(16),
            fontWeight: '600',
          }}
        >
          Cancel
        </Button>

        <LinearGradient
          colors={['#649361ff', '#457542ff', '#385437ff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: horizontalScale(30),
            paddingHorizontal: horizontalScale(18),
            paddingVertical: verticalScale(1),
            width: '50%',
            height: verticalScale(35),
            lineHeight: verticalScale(40),
          }}
        >
          <Button
            onPress={onClose}
            mode="contained"
            labelStyle={{
              color: '#ffffff',
              fontSize: scaleFontSize(16),
              lineHeight: verticalScale(18),
              fontWeight: '600',
            }}
            style={{
              backgroundColor: 'transparent',
            }}
          >
            Ok
          </Button>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default VoucherCodeSuccess;

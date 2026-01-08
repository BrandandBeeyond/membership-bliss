import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import Typography from '../../../components/Typography';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { resendVocuherRedeemCode } from '../../../redux/actions/VoucherAction';

const VoucherCodeSuccess = ({
  otpCode,
  onClose,
  expiresAt,
  pendingRedeemption,
  setOtpData,
  setPendingRedeemption,
}) => {
  const dispatch = useDispatch();
  const [digits, setDigits] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [resendLoading, setResendLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (otpCode) {
      const arr = otpCode.split('').slice(0, 6);
      setDigits(arr);
    }
  }, [otpCode]);

  useEffect(() => {
    if (!expiresAt) return;

    const expiryTime = new Date(expiresAt).getTime();

    if (isNaN(expiryTime) || expiryTime <= Date.now()) {
      setSecondsLeft(0);
      return;
    }

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(Math.floor((expiryTime - now) / 1000), 0);
      setSecondsLeft(diff);

      if (diff === 0) {
        clearInterval(timerRef.current);
      }
    };

    tick();
    timerRef.current = setInterval(tick, 1000);

    return () => clearInterval(timerRef.current);
  }, [expiresAt]);

  const formatTime = sec => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const resendOTP = async () => {
    try {
      if (!pendingRedeemption?.redemptionId) return;

      setResendLoading(true);

      const res = await dispatch(
        resendVocuherRedeemCode(pendingRedeemption.redemptionId),
      );

      setOtpData(res.otpCode.toString());

      setPendingRedeemption({
        redemptionId: res.redemptionId,
        otpCode: res.otpCode,
        status: 'Pending',
        expiresAt: res.expiresAt,
      });
    } catch (error) {
      console.error('error resending otp', error);
    } finally {
      setResendLoading(false);
    }
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
          Voucher Redeemtion in Progress !
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

        {secondsLeft !== null && secondsLeft > 0 && (
          <Typography
            weight="Bold"
            color="#3e4e31ff"
            variant="fthead"
            style={globalStyle.textCenter}
          >
            Time Left: {formatTime(secondsLeft)}
          </Typography>
        )}

        {secondsLeft === 0 && (
          <View style={globalStyle.alignCenter}>
            <TouchableOpacity
              style={{
                height: verticalScale(26),
                width: horizontalScale(120),
                backgroundColor: '#1d2d12ff',
                borderRadius: horizontalScale(10),
                paddingHorizontal: horizontalScale(15),
                paddingVertical: verticalScale(2),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={resendOTP}
            >
              <Typography
                style={{ fontSize: scaleFontSize(13) }}
                weight="SemiBold"
                color="#fff"
              >
                {resendLoading ? 'Resending' : 'Resend Code'}
              </Typography>
            </TouchableOpacity>
          </View>
        )}

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

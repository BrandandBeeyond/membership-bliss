import React, { useEffect, useRef, useState } from 'react';
import { Platform, TextInput, View } from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';
import { globalStyle } from '../../../../assets/styles/globalStyle';

const OtpInput = ({ onOtpChange }) => {
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const inputsRef = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputsRef.current[0]?.focus();
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  const updateOtp = newOtp => {
    setOtp(newOtp);
    onOtpChange(newOtp.join(''));
  };

  const handleChange = (value, index) => {
    const newOtp = [...otp];

    // Handle paste
    if (value.length > 1) {
      const chars = value.split('').slice(0, OTP_LENGTH);
      chars.forEach((c, i) => (newOtp[i] = c));
      updateOtp(newOtp);
      inputsRef.current[Math.min(chars.length - 1, OTP_LENGTH - 1)]?.focus();
      return;
    }

    // Only digits
    if (!/^\d?$/.test(value)) return;

    newOtp[index] = value;
    updateOtp(newOtp);

    // Go forward
    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    const key = e.nativeEvent.key;
    const newOtp = [...otp];

    if (key === 'Backspace') {
      // Case 1: current box has a digit → clear only this box
      if (newOtp[index] !== '') {
        newOtp[index] = '';
        updateOtp(newOtp);
        return;
      }

      // Case 2: current is already empty → move back & clear previous
      if (index > 0) {
        newOtp[index - 1] = '';
        updateOtp(newOtp);
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View
      style={[
        globalStyle.row,
        globalStyle.justifyBetween,
        {
          marginVertical: verticalScale(20),
        },
      ]}
    >
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputsRef.current[index] = ref)}
          value={digit}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          maxLength={1}
          onChangeText={v => handleChange(v, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          autoFocus={index === 0}
          style={{
            width: horizontalScale(45),
            height: horizontalScale(45),
            borderWidth: 1.2,
            borderColor: digit ? '#6f9c5a' : '#9fbe78',
            borderRadius: horizontalScale(10),
            textAlign: 'center',
            fontSize: 18,
            color: '#1e1e1e',
            backgroundColor: '#fff',
          }}
        />
      ))}
    </View>
  );
};

export default OtpInput;

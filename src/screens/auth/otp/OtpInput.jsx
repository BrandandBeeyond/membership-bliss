import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
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
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (value, index) => {
    const newOtp = [...otp];

    // ⬅️ Detect BACKSPACE via empty value
    if (value === '') {
      newOtp[index] = '';
      setOtp(newOtp);
      onOtpChange(newOtp.join(''));

      if (index > 0) {
        setTimeout(() => {
          inputsRef.current[index - 1]?.focus();
        }, 50);
      }
      return;
    }

    // ⬅️ Allow only numbers
    if (!/^\d$/.test(value)) return;

    newOtp[index] = value;
    setOtp(newOtp);
    onOtpChange(newOtp.join(''));

    // ⬅️ Move to next field
    if (index < OTP_LENGTH - 1) {
      setTimeout(() => {
        inputsRef.current[index + 1]?.focus();
      }, 50);
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
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={value => handleChange(value, index)}
          editable={index === 0 || otp[index - 1] !== ''}
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

import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/Scaling';
import Typography from '../components/Typography';

const GoogleSignButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: verticalScale(35),
        borderRadius: horizontalScale(15),
        backgroundColor: '#e7f5ddff', // black color
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: horizontalScale(2),
      }}
    >
      <Image
        source={require('../../assets/images/google.png')}
        style={{ width:horizontalScale(22), height: verticalScale(22), marginRight: 10,objectFit:'contain' }}
      />
      <Typography variant="subtitle" color="#4d6244ff" weight="MSemiBold">
        Continue with Google
      </Typography>
    </TouchableOpacity>
  );
};

export default GoogleSignButton;

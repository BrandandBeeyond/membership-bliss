import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyle';
import Typography from '../Typography';

const Reviews = () => {
  return (
    <View style={[globalStyle.relative, globalStyle.mt20]}>
      <Typography variant="h5" weight="Bold">
       User Reviews
      </Typography>
    </View>
  );
};

export default Reviews;

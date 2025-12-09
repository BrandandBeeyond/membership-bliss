import React from 'react';
import { View } from 'react-native';
import { globalStyle } from '../../../../assets/styles/globalStyle';

const ValueVoucherScreen = ({ valueVouchers }) => {
  console.log('value vouchers', valueVouchers);

  return (
    <View
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.pt10]}
    ></View>
  );
};

export default ValueVoucherScreen;

import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../assets/styles/globalStyle';
import { verticalScale } from '../../assets/styles/Scaling';
import Typography from './Typography';

const Topbar = () => {
  return (
    <SafeAreaView>
      <View style={[globalStyle.dflex, globalStyle.row,globalStyle.alignCenter,globalStyle.cg10]}>
        <Image
          source={require('../../assets/images/user.png')}
          style={{ height: verticalScale(20), width: verticalScale(20) }}
        />
        <Typography variant='subtitle' weight='SemiBold'>Welcome User</Typography>
      </View>
    </SafeAreaView>
  );
};

export default Topbar;

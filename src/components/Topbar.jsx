import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../assets/styles/globalStyle';
import { verticalScale } from '../../assets/styles/Scaling';
import Typography from './Typography';
import { useNavigation } from '@react-navigation/native';

const Topbar = () => {

  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <Pressable style={[globalStyle.dflex, globalStyle.row,globalStyle.alignCenter,globalStyle.cg10]} onPress={()=>navigation.navigate('AuthScreen')}>
        <Image
          source={require('../../assets/images/user.png')}
          style={{ height: verticalScale(20), width: verticalScale(20) }}
        />
        <Typography variant='subtitle' weight='SemiBold'>Welcome User</Typography>
      </Pressable>
    </SafeAreaView>
  );
};

export default Topbar;

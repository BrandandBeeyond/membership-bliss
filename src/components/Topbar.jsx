import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../assets/styles/globalStyle';
import { verticalScale } from '../../assets/styles/Scaling';
import Typography from './Typography';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Topbar = () => {

  const {user} = useSelector(state=>state.user);  
  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <Pressable style={[globalStyle.dflex, globalStyle.row,globalStyle.alignCenter,globalStyle.cg10]}>
        <Image
          source={require('../../assets/images/user.png')}
          style={{ height: verticalScale(20), width: verticalScale(20) }}
        />
        <Typography variant='subtitle' weight='MSemiBold'>Welcome  {user?.fullname.split(" ")[0] || 'Guest'}</Typography>
      </Pressable>
    </SafeAreaView>
  );
};

export default Topbar;

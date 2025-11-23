import { StyleSheet, Dimensions } from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/styles/Scaling';

export const membershipScreenStyle = StyleSheet.create({
  memberCard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  background: {
    height: '170',
    width: '100%',
    borderRadius: horizontalScale(25),
    padding: horizontalScale(20),
  },
  bgwhitePadding10Radius:{
    backgroundColor:'#ffffff',
    height:verticalScale(45),
    width:horizontalScale(50),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:horizontalScale(50),
  }
});

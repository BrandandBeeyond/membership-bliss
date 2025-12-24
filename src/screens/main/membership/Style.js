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
    height: '190',
    width: '100%',
    borderRadius: horizontalScale(25),
    padding: horizontalScale(20),
  },
  bgwhitePadding10Radius: {
    backgroundColor: '#ffffff',
    height: horizontalScale(60),
    width: horizontalScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(50),
    elevation:4
  },
  editionCard: {
    borderWidth: 0.6,
    borderColor: '#6c876bff',
    backgroundColor: '#fcfafaff',
    borderRadius: horizontalScale(12),
    padding: horizontalScale(10),
    width:'100%'
  },
});

import { StyleSheet, Dimensions } from 'react-native';
import { horizontalScale,verticalScale } from '../../../../assets/styles/Scaling';

export const membershipScreenStyle = StyleSheet.create({
  memberCard: {
    width: Dimensions.get('window').width - horizontalScale(40),
    minHeight:verticalScale(140),
    borderRadius:horizontalScale(25),
    padding:horizontalScale(20)
  },
});

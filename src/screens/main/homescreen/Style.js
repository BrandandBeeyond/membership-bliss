import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../../assets/styles/Scaling';

export const HomeScreenStyles = StyleSheet.create({
     imageBanner: {
    height: 220,
    width: '100%',
    objectFit: 'cover',
    marginTop: verticalScale(20),
  },
});
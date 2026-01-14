import { StyleSheet, Text } from 'react-native';
import { scaleFontSize, verticalScale } from '../../assets/styles/Scaling';
import Fonts from '../utils/fonts';

const Typography = ({
  children,
  variant = 'body',
  weight = 'Regular',
  color = '#000',
  style,
  ...rest
}) => {
  return (
    <Text
      style={[styles[variant], { fontFamily: Fonts[weight], color }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: scaleFontSize(30),
    lineHeight: verticalScale(38),
  },
  h2: {
    fontSize: scaleFontSize(26),
    lineHeight: verticalScale(34),
  },
  h3: {
    fontSize: scaleFontSize(22),
    lineHeight: verticalScale(30),
  },
  h4: {
    fontSize: scaleFontSize(20),
    lineHeight: verticalScale(28),
  },
  h5: {
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(26),
  },
  h6: {
    fontSize: scaleFontSize(17),
    lineHeight: verticalScale(24),
  },
  onboardinghead: {
    fontSize: scaleFontSize(24),
    lineHeight: verticalScale(27),
  },
  fthead: {
    fontSize: scaleFontSize(16),
    lineHeight: verticalScale(18),
  },
  subhead: {
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(17),
  },
  subtitle: {
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(23),
  },
  subtext: {
    fontSize: scaleFontSize(13),
    lineHeight: verticalScale(20),
  },
  subline: {
    fontSize: scaleFontSize(13),
    lineHeight: verticalScale(17),
  },

  body: {
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(22),
  },
  caption: {
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(16),
  },
  scaption: {
    fontSize: scaleFontSize(11),
    lineHeight: verticalScale(13),
  },
  small: {
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(14),
  },
});

export default Typography;

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
    fontSize: scaleFontSize(32),
    lineHeight: verticalScale(40),
  },
  h2: {
    fontSize: scaleFontSize(28),
    lineHeight: verticalScale(36),
  },
  h3: {
    fontSize: scaleFontSize(24),
    lineHeight: verticalScale(32),
  },
  h4: {
    fontSize: scaleFontSize(20),
    lineHeight: verticalScale(28),
  },
  subtitle: {
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(26),
  },
  body: {
    fontSize: scaleFontSize(16),
    lineHeight: verticalScale(24),
  },
  caption: {
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(20),
  },
  small: {
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(14),
  },
});

export default Typography;

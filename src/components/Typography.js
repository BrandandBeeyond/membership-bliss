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
    fontSize: scaleFontSize(18),
    lineHeight: verticalScale(26),
  },
  subtitle: {
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(23),
  },
  body: {
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(22),
  },
  caption: {
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(18),
  },
  small: {
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(14),
  },
});

export default Typography;

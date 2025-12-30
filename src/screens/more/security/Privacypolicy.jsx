import React from 'react';
import { Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { verticalScale } from '../../../../assets/styles/Scaling';
import Typography from '../../../components/Typography';

const Privacypolicy = () => {
  return (
    <SafeAreaView
      style={[globalStyle.bgwhite, globalStyle.flex, globalStyle.relative]}
    >
      <ScrollView contentContainerStyle={globalStyle.px20}>
        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          Your trust matters to us.
        </Typography>
        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          Touchwood Bliss respects your privacy and safeguards your personal
          information with care.
        </Typography>
        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          We collect only essential details required to enhance your membership
          experience and never share your data with third parties without
          consent.
        </Typography>
        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          Your information is used solely to serve you better, communicate
          relevant updates and ensure seamless access to your benefits.
        </Typography>
        <Typography
          variant="subline"
          weight="MMedium"
          style={{ marginBottom: verticalScale(8) }}
        >
          Because privacy, like nature, deserves respect.
        </Typography>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacypolicy;

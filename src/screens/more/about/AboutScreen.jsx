import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import Typography from '../../../components/Typography';

const AboutScreen = () => {
  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Heading */}
        <View style={globalStyle.mt20}>
          <Typography
            variant="h4"
            color="#1d1d1dff"
            weight="SemiBold"
          >
            Touchwood Bliss was created with a simple belief —
          </Typography>
        </View>

        {/* Core belief */}
        <View style={globalStyle.mt10}>
          <Typography
            variant="subhead"
            color="#5f6f5fff"
            weight="MMedium"
            style={{ lineHeight: 22 }}
          >
            that nature is not a place we visit, but a place we belong to.
          </Typography>
        </View>

        {/* Introduction */}
        <View style={globalStyle.mt20}>
          <Typography
            variant="subhead"
            color="#3a3a3aff"
            weight="MMedium"
            style={{ lineHeight: 22 }}
          >
            Nestled in the serene hills of Igatpuri, Touchwood Bliss is India’s
            first family celebration nature retreat, thoughtfully designed for
            families, friends, and communities to slow down, reconnect, and
            celebrate life together.
          </Typography>
        </View>

        {/* Experience description */}
        <View style={globalStyle.mt15}>
          <Typography
            variant="subhead"
            color="#3a3a3aff"
            weight="MMedium"
            style={{ lineHeight: 22 }}
          >
            Here, mountains replace walls, silence replaces noise, and time moves
            gently. Every corner invites you to pause, breathe, and be present.
          </Typography>
        </View>

        {/* Offerings */}
        <View style={globalStyle.mt15}>
          <Typography
            variant="subhead"
            color="#3a3a3aff"
            weight="MMedium"
            style={{ lineHeight: 22 }}
          >
            From peaceful stays and soulful dining to heartfelt celebrations,
            wellness experiences, and joyful gatherings, every moment at Bliss is
            crafted with care, warmth, and intention.
          </Typography>
        </View>

        {/* Philosophy */}
        <View style={globalStyle.mt15}>
          <Typography
            variant="subhead"
            color="#3a3a3aff"
            weight="MMedium"
            style={{ lineHeight: 22 }}
          >
            Touchwood Bliss is not about luxury or indulgence. It is about
            comfort, connection, and conscious living. It is about creating
            memories that feel real, meaningful, and deeply personal.
          </Typography>
        </View>

        {/* Community */}
        <View style={globalStyle.mt15}>
          <Typography
            variant="subhead"
            color="#3a3a3aff"
            weight="MMedium"
            style={{ lineHeight: 22 }}
          >
            Through the Nature’s Club Membership and the Bliss App, we invite you
            to become part of a growing community that values peace, presence,
            and togetherness.
          </Typography>
        </View>

        {/* Closing */}
        <View style={globalStyle.mt20}>
          <Typography
            variant="h6"
            color="#5f6f5fff"
            weight="MSemiBold"
            style={{ lineHeight: 20 }}
          >
            Because when you are here, you don’t just feel relaxed —   you feel at home.
          </Typography>
        </View>

     

        {/* Tagline */}
        <View style={[globalStyle.mt50, globalStyle.mb30]}>
          <Typography
            variant="h5"
            color="#3a6c3aff"
            weight="SemiBold"
            style={{ textAlign: 'center' }}
          >
            I belong to nature{"\n"}#IBelongToNature
          </Typography>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

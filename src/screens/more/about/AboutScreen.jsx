import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../../../assets/styles/globalStyle';
import { ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <SafeAreaView
      style={[globalStyle.flex, globalStyle.bgwhite, globalStyle.px20]}
    >
          <ScrollView>
              
          </ScrollView>
    </SafeAreaView>
  );
};


// text

// Touchwood Bliss was created with a simple belief —
//  that nature is not a place we visit, but a place we belong to.
// Nestled in the serene hills of Igatpuri, Touchwood Bliss is India’s first family celebration nature retreat, thoughtfully designed for families, friends and communities to slow down, reconnect and celebrate life together.
// Here, mountains replace walls, silence replaces noise, and time moves gently.
//  From peaceful stays and soulful dining to heartfelt celebrations, wellness experiences and joyful gatherings, every moment at Bliss is crafted with care, warmth and intention.
// Touchwood Bliss is not about luxury or indulgence.
//  It is about comfort, connection and conscious living.
//  It is about creating memories that feel real, meaningful and deeply personal.
// Through the Nature’s Club Membership and the Bliss App, we invite you to become part of a growing community that values peace, presence and togetherness.
// Because when you are here, you don’t just feel relaxed —
//  you feel at home.
// I belong to nature. :herb:
//  #IBELONGTONATURE


export default AboutScreen;

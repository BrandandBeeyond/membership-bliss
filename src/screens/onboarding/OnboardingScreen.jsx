import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { editionStyle } from '../main/edition/Style';
import Typography from '../../components/Typography';
import OnboardinghexLayout from './OnboardinghexLayout';

const { width, height } = Dimensions.get('window');

/* ---------- Background Images ---------- */
const backgrounds = [
  require('../../../assets/images/sliderbg.png'),
  // require('../../../assets/images/onboarding-bg-2.jpg'),
  // require('../../../assets/images/onboarding-bg-3.jpg'),
];

/* ---------- Dots ---------- */
const Dot = ({ selected }) => (
  <View style={[styles.dot, selected && styles.activeDot]} />
);

/* ---------- Buttons ---------- */
const NextButton = props => (
  <Button
    {...props}
    mode="contained"
    contentStyle={{ height: verticalScale(30) }}
    style={[
      globalStyle.rounded10,
      editionStyle.buynow,
      globalStyle.px10,
      { backgroundColor: '#212520ff' },
    ]}
    labelStyle={{ color: '#fff' }}
  >
    Next
  </Button>
);

const DoneButton = props => (
  <Button
    {...props}
    mode="contained"
    contentStyle={{ height: verticalScale(30) }}
    style={[
      globalStyle.rounded10,
      editionStyle.buynow,
      { backgroundColor: '#212520ff', width: '100%' },
    ]}
    labelStyle={{ color: '#fff' }}
  >
    Get Started
  </Button>
);

/* ---------- Screen ---------- */
const OnboardingScreen = ({ navigation }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('onboardingdone', 'true');
    navigation.replace('AuthScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 🔥 FULL SCREEN BACKGROUND */}
      <ImageBackground
        source={backgrounds[pageIndex]}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />

      {/* Optional overlay for readability */}
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: 'rgba(0,0,0,0.35)' },
        ]}
      />

      <Onboarding
        scrollEnabled={false} // ✅ button only
        showSkip={false}
        bottomBarHighlight={false}
        DotComponent={Dot}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        onPageChange={index => setPageIndex(index)}
        onDone={finishOnboarding}
        pages={[
          {
            backgroundColor: 'transparent',
            image: (
              <View style={styles.logoWrapper}>
                
                <Image
                  source={require('../../../assets/images/natures-club-membershiplogo.png')}
                  style={{
                    height: verticalScale(140),
                    width: verticalScale(140),
                  }}
                  resizeMode="contain"
                />
              </View>
            ),
            title: (
              <Typography variant="h2" weight="SemiBold" color="#ffffff">
                Welcome to Touchwood Bliss
              </Typography>
            ),
            subtitle: (
              <Typography
                variant="h5"
                color="#E4EFE4"
                weight="MMedium"
                style={globalStyle.textCenter}
              >
                A peaceful retreat surrounded by nature and comfort.
              </Typography>
            ),
          },
          {
            backgroundColor: 'transparent',
            image: <OnboardinghexLayout />,
            title: (
              <Typography variant="h2" weight="SemiBold" color="#ffffff">
                Experiences rooted in nature
              </Typography>
            ),
            subtitle: (
              <Typography
                variant="h5"
                color="#E4EFE4"
                weight="MMedium"
                style={globalStyle.textCenter}
              >
                Wellness, celebrations and togetherness.
              </Typography>
            ),
          },
          {
            backgroundColor: 'transparent',
            title: (
              <Typography variant="h2" weight="SemiBold" color="#ffffff">
                Step into a life of calm and connection
              </Typography>
            ),
            subtitle: (
              <Typography
                variant="h5"
                color="#E4EFE4"
                weight="MMedium"
                style={globalStyle.textCenter}
              >
                Everything you need for a peaceful escape.
              </Typography>
            ),
          },
        ]}
      />
    </View>
  );
};

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowWrapper: {
    position: 'absolute',
    width: verticalScale(260),
    height: verticalScale(260),
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    width: '100%',
    height: '100%',
    borderRadius: 130,
    backgroundColor: '#FFDFA8', // warm sunlight tone
    opacity: 0.35,
    transform: [{ scale: 1.1 }],
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C9D8C2',
    marginHorizontal: 4,
  },
  activeDot: {
    width: horizontalScale(35),
    backgroundColor: '#ffffff',
  },
});

export default OnboardingScreen;

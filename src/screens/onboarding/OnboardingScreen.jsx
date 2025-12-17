import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Button } from 'react-native-paper';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { editionStyle } from '../main/edition/Style';
import Typography from '../../components/Typography';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const Dot = ({ selected }) => {
  return <View style={[styles.dot, selected ? styles.activeDot : null]} />;
};

const NextButton = ({ ...props }) => (
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

const DoneButton = ({ ...props }) => (
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

const OnboardingScreen = ({ navigation }) => {
  const finishOnboarding = async () => {
    await AsyncStorage.setItem('onboardingdone', 'true');
    navigation.replace('AuthScreen');
  };

  return (
    <Onboarding
      DotComponent={Dot}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      showSkip={false}
      onDone={finishOnboarding}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#fafffaff',
          image: (
            <View style={[globalStyle.mt10, globalStyle.relative]}>
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
            <Typography variant="h2" weight="SemiBold" color="#3a3939ff">
              Welcome to Touchwood Bliss
            </Typography>
          ),
          subtitle: (
            <Typography
              variant="h5"
              color="#6A7A6A"
              weight="MMedium"
              style={globalStyle.textCenter}
            >
              A peaceful retreat surrounded by nature and comfort.
            </Typography>
          ),
        },
        {
          backgroundColor: '#F6FAF1',
          image: (
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../../assets/images/onboarding2.png')}
                style={styles.image}
              />
            </View>
          ),
          title: (
            <Typography variant="h2" weight="SemiBold" color="#3a3939ff">
              Welcome to Touchwood Bliss
            </Typography>
          ),
          subtitle: (
            <Typography
              variant="h5"
              color="#6A7A6A"
              weight="MMedium"
              style={globalStyle.textCenter}
            >
              A peaceful retreat surrounded by nature and comfort.
            </Typography>
          ),
        },
        {
          backgroundColor: '#F6FAF1',

          title: (
            <Typography variant="h2" weight="SemiBold" color="#3a3939ff">
              Step into a life of nature, comfort, and unforgettable family
              moments.
            </Typography>
          ),
          subtitle: (
            <Typography
              variant="h5"
              color="#6A7A6A"
              weight="MMedium"
              style={globalStyle.textCenter}
            >
              “Everything you need for a peaceful, well-deserved escape — in one
              place.”
            </Typography>
          ),
        },
      ]}
    />
  );
};
const styles = StyleSheet.create({
  imageWrapper: {
    width: width - 60,
    height: verticalScale(300),
    borderRadius: horizontalScale(26),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  lottieWrapper: {
    width: width - 60,
    height: 300,
    borderRadius: 28,
    backgroundColor: '#EAF3D5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // title: {
  //   marginTop: 40,
  //   fontSize: 24,
  //   fontFamily: 'Montserrat-SemiBold',
  //   color: '#1F2F1F',
  //   textAlign: 'center',
  //   paddingHorizontal: 20,
  // },
  // subtitle: {
  //   marginTop: 12,
  //   fontSize: 14,
  //   color: '#6A7A6A',
  //   textAlign: 'center',
  //   paddingHorizontal: 32,
  //   lineHeight: 22,
  // },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C9D8C2',
    marginHorizontal: 4,
  },
  activeDot: {
    width: horizontalScale(35),
    backgroundColor: '#313a31ff',
  },
});

export default OnboardingScreen;

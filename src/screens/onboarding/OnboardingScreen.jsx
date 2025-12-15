import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Button } from 'react-native-paper';
import { verticalScale } from '../../../assets/styles/Scaling';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { editionStyle } from '../main/edition/Style';
import Typography from '@/components/Typography';

const { width } = Dimensions.get('window');

const Dot = ({ selected }) => {
  return <View style={[styles.dot, selected ? styles.activeDot : null]} />;
};

const NextButton = ({ ...props }) => (
  <Button
    mode="contained"
    contentStyle={{ height: verticalScale(30) }}
    style={[
      globalStyle.rounded10,
      editionStyle.buynow,
      { backgroundColor: '#212520ff', width: '36%' },
    ]}
    labelStyle={{ color: '#fff' }}
  >
    <Typography variant="body" color="#4c5d49ff" weight="MSemiBold">
      Next
    </Typography>
  </Button>
);

const DoneButton = ({ ...props }) => (
  <Button
    mode="contained"
    contentStyle={{ height: verticalScale(30) }}
    style={[
      globalStyle.rounded10,
      editionStyle.buynow,
      { backgroundColor: '#212520ff', width: '36%' },
    ]}
    labelStyle={{ color: '#fff' }}
  >
    <Typography variant="body" color="#4c5d49ff" weight="MSemiBold">
      Get Started
    </Typography>
  </Button>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      DotComponent={Dot}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      bottomBarHighlight={false}
      onSkip={() => navigation.replace('AuthScreen')}
      onDone={() => navigation.replace('AuthScreen')}
    />
  );
};
const styles = StyleSheet.create({
  imageWrapper: {
    width: width - 60,
    height: 300,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#EAF3D5',
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
  title: {
    marginTop: 40,
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: '#1F2F1F',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6A7A6A',
    textAlign: 'center',
    paddingHorizontal: 32,
    lineHeight: 22,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C9D8C2',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 18,
    backgroundColor: '#2D532C',
  },
  button: {
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 14,
    backgroundColor: '#2D532C',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default OnboardingScreen;

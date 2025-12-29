import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Typography from '../../components/Typography';
import { horizontalScale, verticalScale } from '../../../assets/styles/Scaling';
import { globalStyle } from '../../../assets/styles/globalStyle';
import OnboardinghexLayout from './OnboardinghexLayout';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const SLIDES = [
  {
    key: '1',
    bg: require('../../../assets/images/sliderbg.png'),
    image: require('../../../assets/images/natures-club-membershiplogo.png'),
    title: 'Welcome to Touchwood Bliss',
    subtitle: 'A peaceful retreat surrounded by nature and comfort.',
  },
  {
    key: '2',
    bg: require('../../../assets/images/sliderbg.png'),
    custom: true,
    title: 'Experiences rooted in nature',
    subtitle: 'Wellness, celebrations and togetherness.',
  },
  {
    key: '3',
    video: require('../../../assets/videos/onboarding.mp4'),
    title: 'Step into a life of calm & connection',
    subtitle: 'Everything you need for a peaceful escape.',
  },
];

const OnboardingScreen = ({ navigation }) => {
  const flatRef = useRef(null);
  const [index, setIndex] = useState(0);

  const next = async () => {
    if (index < SLIDES.length - 1) {
      flatRef.current.scrollToIndex({ index: index + 1, animated: true });
      setIndex(index + 1);
    } else {
      await AsyncStorage.setItem('onboardingdone', 'true');
      navigation.replace('AuthScreen');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      
      {item.video ? (
        <Video
          source={item.video}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          repeat
          muted
          paused={index !== 2}
        />
      ) : (
        <ImageBackground source={item.bg} style={StyleSheet.absoluteFill} />
      )}

      <View style={styles.overlay} />

      
      {item.custom ? (
        <OnboardinghexLayout />
      ) : item.image ? (
        <Image source={item.image} style={styles.logo} resizeMode="contain" />
      ) : null}

      <Typography
        variant="h2"
        weight="Bold"
        color="#5d4924ff"
        style={[globalStyle.textCenter, { marginTop: 20 }]}
      >
        {item.title}
      </Typography>

      <Typography
        variant="h5"
        weight="MMedium"
        color="#E4EFE4"
        style={globalStyle.textCenter}
      >
        {item.subtitle}
      </Typography>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* 🔒 Swipe Disabled */}
      <FlatList
        ref={flatRef}
        data={SLIDES}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />

      {/* 🔥 Bottom Bar */}
      <View style={styles.bottom}>
        {/* Pagination */}
        <View style={styles.pagination}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, index === i && styles.activeDot]}
            />
          ))}
        </View>

        {/* Button */}
        <Button
          mode="contained"
          onPress={next}
          contentStyle={{ paddingHorizontal: 20 }}
          style={styles.btn}
        >
          {index === SLIDES.length - 1 ? 'Get Started' : 'Next'}
        </Button>
      </View>
    </View>
  );
};

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    height: verticalScale(200),
    width: verticalScale(140),
    marginBottom: 30,
  },

  /* Bottom Bar */
  bottom: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  /* Pagination */
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C9D8C2',
    marginRight: 6,
  },
  activeDot: {
    width: horizontalScale(28),
    backgroundColor: '#ffffff',
  },

  btn: {
    backgroundColor: '#212520',
    borderRadius: 10,
  },
});

export default OnboardingScreen;

import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { verticalScale } from '../../../assets/styles/Scaling';

const { width } = Dimensions.get('window');

const Onboardingdecor = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../../assets/images/bottomleafs.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: verticalScale(-10),
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: verticalScale(90),
  },
});

export default Onboardingdecor;

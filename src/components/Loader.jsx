import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../../assets/styles/globalStyle';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <SafeAreaView
      style={[
        globalStyle.flex,
        globalStyle.alignCenter,
        globalStyle.jusifyCenter,
      ]}
    >
      <LottieView
        source={require('../asset/loader/loader.json')}
        style={{ width: 330, height: 330 }}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
};

export default Loader;

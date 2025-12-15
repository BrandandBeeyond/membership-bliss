import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyle';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppEntryScreen = ({ navigation }) => {
  const { isAuthenticated } = useSelector(state => state.user);

  useEffect(() => {
    const checkFlow = async () => {
      const hasOnboarded = await AsyncStorage.getItem('onboardingdone');

      if (!hasOnboarded) {
        navigation.replace('OnboardingScreen');
        return;
      }

      if (!isAuthenticated) {
        navigation.replace('AuthScreen');
        return;
      }

      navigation.replace('HomeTabs');
    };

    checkFlow();
  }, [navigation, isAuthenticated]);

  return (
    <View
      style={[
        globalStyle.flex,
        globalStyle.alignCenter,
        globalStyle.jusifyCenter,
      ]}
    >
      <ActivityIndicator size="large" color="#4b6637ff" />
    </View>
  );
};

export default AppEntryScreen;

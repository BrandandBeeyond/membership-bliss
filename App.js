import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigation } from './src/navigation/MainNavigation';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
             <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

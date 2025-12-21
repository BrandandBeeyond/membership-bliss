import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigation } from './src/navigation/MainNavigation';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { initGoogleSignin } from './src/config/googleSigninConfig';

const App = () => {
  useEffect(() => {
    initGoogleSignin();
  }, []);

  const lightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#588650ff',
      secondary: '#689d58ff',
      background: '#ffffff',
      surface: '#ffffff',
      onSurface: '#000000',
      onBackground: '#000000',
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider theme={lightTheme}>
            <NavigationContainer>
              <MainNavigation />
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

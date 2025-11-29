import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { userReducer } from './reducers/UserReducer';

const persistUserConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user', 'token', 'isAuthenticated'],
};

const persistUserReducer = persistReducer(persistUserConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;

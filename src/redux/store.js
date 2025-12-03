import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { userReducer } from './reducers/UserReducer';
import { categoryReducer } from './reducers/CategoryReducer';

const persistUserConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user', 'token', 'isAuthenticated'],
};

const persistUserReducer = persistReducer(persistUserConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistUserReducer,
    categories: categoryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;

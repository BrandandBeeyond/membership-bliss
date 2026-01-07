import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { userReducer } from './reducers/UserReducer';
import { categoryReducer } from './reducers/CategoryReducer';
import { MembershipReducer } from './reducers/MembershipReducer';
import { MembershipBookingReducer } from './reducers/MembershipbookingReducer';
import { UpdatesReducer } from './reducers/UpdateReducer';
import { VoucherReducer } from './reducers/VoucherReducer';

const persistUserConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user', 'token', 'isAuthenticated'],
};

const persistVoucherConfig = {
  key: 'vouchers',
  storage: AsyncStorage,
  whitelist: ['redemption'],
};

const persistUserReducer = persistReducer(persistUserConfig, userReducer);
const persistVoucherReducer = persistReducer(
  persistVoucherConfig,
  VoucherReducer,
);

const store = configureStore({
  reducer: {
    user: persistUserReducer,
    categories: categoryReducer,
    membershipplans: MembershipReducer,
    membershipbookings: MembershipBookingReducer,
    updates: UpdatesReducer,
    vouchers: persistVoucherReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;

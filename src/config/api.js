import axios from 'axios';
import { API_SERVER } from './Key';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import { LOGOUT_USER } from '../redux/constants/Userconstant';

const api = axios.create({
  baseURL: API_SERVER,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    if (
      error.response?.status === 401 &&
      (error.response?.data?.message === 'Not authorized, token failed' ||
        error.response?.data?.message === 'jwt expired')
    ) {
      await AsyncStorage.removeItem('token');
      store.dispatch({ type: LOGOUT_USER });
    }

    return Promise.reject(error);
  },
);

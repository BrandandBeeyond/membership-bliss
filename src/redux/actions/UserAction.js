import { API_SERVER } from '../../config/Key';
import axios from 'axios';
import {
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  LOGOUT_USER,
} from '../constants/Userconstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const googleLoginAction = idToken => async dispatch => {
  try {
    console.log('SENDING ID TOKEN TO BACKEND:', idToken);

    dispatch({ type: GOOGLE_LOGIN_REQUEST });

    const { data } = await axios.post(`${API_SERVER}/user/google-login`, {
      idToken,
    });

    await AsyncStorage.setItem('token', data.token);

    dispatch({
      type: GOOGLE_LOGIN_SUCCESS,
      payload: {
        user: data.user,
        token: data.token,
      },
    });
  } catch (error) {
    console.log('Google Login Error:', error.response?.data || error);
    throw error;
  }
};


export const logoutUser = () => async dispatch => {
  try {
    AsyncStorage.removeItem('token');
    dispatch({ type: LOGOUT_USER });
  } catch (error) {
    console.log('Logout error:', error);
  }
};

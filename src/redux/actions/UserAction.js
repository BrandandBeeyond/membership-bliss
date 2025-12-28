import { API_SERVER } from '../../config/Key';
import axios from 'axios';
import {
  COMPLETE_PROFILE_FAILURE,
  COMPLETE_PROFILE_REQUEST,
  COMPLETE_PROFILE_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  LOGOUT_USER,
  SEND_OTP_FAILURE,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
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

export const sendOtpAction = phone => async dispatch => {
  try {
    dispatch({ type: SEND_OTP_REQUEST });

    const { data } = await axios.post(`${API_SERVER}/user/send-otp`, { phone });

    dispatch({
      type: SEND_OTP_SUCCESS,
      payload: phone,
    });

    return data;
  } catch (error) {
    dispatch({
      type: SEND_OTP_FAILURE,
      payload: error?.response?.data?.message || 'Failed to send OTP',
    });
  }
};

export const verifyOtpAction = (phone, otp) => async dispatch => {
  try {
    dispatch({ type: VERIFY_OTP_REQUEST });

    const { data } = await axios.post(`${API_SERVER}/user/verify-otp`, {
      phone,
      otp,
    });

    await AsyncStorage.setItem('token', data.token);

    dispatch({
      type: VERIFY_OTP_SUCCESS,
      payload: {
        user: data.user,
        token: data.token,
      },
    });

    return data;
  } catch (error) {
    dispatch({
      type: VERIFY_OTP_FAILURE,
      payload: error?.response?.data?.message || 'OTP verification failed',
    });
  }
};

export const completeProfileAction =
  (profileData, navigation) => async dispatch => {
    try {
      dispatch({ type: COMPLETE_PROFILE_REQUEST });

      const token = await AsyncStorage.getItem('token');

      const { data } = await axios.post(
        `${API_SERVER}/user/complete-profile`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      dispatch({
        type: COMPLETE_PROFILE_SUCCESS,
        payload: data.user,
      });

      navigation.replace('HomeTabs');

      return data;
    } catch (error) {
      dispatch({
        type: COMPLETE_PROFILE_FAILURE,
        payload: error?.response?.data?.message || 'Failed to complete profile',
      });
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

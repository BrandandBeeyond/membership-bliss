import { API_SERVER } from '../../config/Key';
import axios from 'axios';
import {
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
} from '../constants/Userconstant';

export const googleLoginAction = idToken => async dispatch => {
  try {
    dispatch({ type: GOOGLE_LOGIN_REQUEST });

    const { data } = await axios.post(`${API_SERVER}/user/google-login`, {
      idToken,
    });

    dispatch({
      type: GOOGLE_LOGIN_SUCCESS,
      payload: {
        user: data.user,
        token: data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: GOOGLE_LOGIN_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    console.log('Google Login Error:', error.response?.data || error);
    throw error;
  }
};

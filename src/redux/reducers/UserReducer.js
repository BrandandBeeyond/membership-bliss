import {
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  SEND_OTP_FAILURE,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
} from '../constants/Userconstant';

let initialState = {
  loading: false,
  otpSent: false,
  phone: null,
  token: null,
  user: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_OTP_REQUEST:
    case VERIFY_OTP_REQUEST:
    case GOOGLE_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otpSent: true,
        phone: action.payload,
      };

    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
      };

    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token || null,
        user: action.payload.user,
      };

    case SEND_OTP_FAILURE:
    case VERIFY_OTP_FAILURE:
    case GOOGLE_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };


    default:
      return state;
  }
};

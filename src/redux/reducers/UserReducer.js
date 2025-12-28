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

let initialState = {
  loading: false,
  otpSent: false,
  phone: null,
  token: null,
  user: null,
  error: null,
  isAuthenticated: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_OTP_REQUEST:
    case VERIFY_OTP_REQUEST:
    case GOOGLE_LOGIN_REQUEST:
    case COMPLETE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthenticated: false,
      };

    case SEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otpSent: true,
        phone: action.payload,
      };

    case COMPLETE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };

    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token || null,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case SEND_OTP_FAILURE:
    case VERIFY_OTP_FAILURE:
    case GOOGLE_LOGIN_FAILURE:
    case COMPLETE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

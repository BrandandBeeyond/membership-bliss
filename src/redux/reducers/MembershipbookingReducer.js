import {
  GET_MY_MEMBERSHIP_FAILURE,
  GET_MY_MEMBERSHIP_REQUEST,
  GET_MY_MEMBERSHIP_SUCCESS,
  GET_USER_BOOKINGS_FAILURE,
  GET_USER_BOOKINGS_REQUEST,
  GET_USER_BOOKINGS_SUCCESS,
  MEMBERSHIP_BOOKING_FAILURE,
  MEMBERSHIP_BOOKING_REQUEST,
  MEMBERSHIP_BOOKING_SUCCESS,
  MEMEBRSHIP_PAYMENT_FAILURE,
  MEMEBRSHIP_PAYMENT_REQUEST,
  MEMEBRSHIP_PAYMENT_SUCCESS,
} from '../constants/membershipconstant';

let initialState = {
  loading: false,
  order: null,
  booking: null,
  error: null,
  userbookings: null,
  activeMembership: null,
};

export const MembershipBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBERSHIP_BOOKING_REQUEST:
    case MEMEBRSHIP_PAYMENT_REQUEST:
    case GET_USER_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_MY_MEMBERSHIP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case MEMBERSHIP_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        booking: action.payload,
        error: null,
      };

    case GET_USER_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        userbookings: action.payload,
      };

    case GET_MY_MEMBERSHIP_SUCCESS:
      return {
        ...state,
        loading: false,
        activeMembership: action.payload,
        error: null,
      };

    case MEMEBRSHIP_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        error: null,
      };

    case MEMBERSHIP_BOOKING_FAILURE:
    case MEMEBRSHIP_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        order: null,
        booking: null,
        error: action.payload,
      };

    case GET_MY_MEMBERSHIP_FAILURE:
    case GET_USER_BOOKINGS_FAILURE:
      return {
        ...state,
        loading: false,
        activeMembership: null,
        userbookings: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

import {
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
};

export const MembershipBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBERSHIP_BOOKING_REQUEST:
    case MEMEBRSHIP_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case MEMBERSHIP_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        booking: action.payload,
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

    default:
      return state;
  }
};

import axios from 'axios';
import {
  FETCH_MEMBERSHIP_CATEGORY_FAILURE,
  FETCH_MEMBERSHIP_CATEGORY_REQUEST,
  FETCH_MEMBERSHIP_CATEGORY_SUCCESS,
  FETCH_MEMBERSHIP_OFFERS_FAILURE,
  FETCH_MEMBERSHIP_OFFERS_REQUEST,
  FETCH_MEMBERSHIP_OFFERS_SUCCESS,
  FETCH_MEMBERSHIP_PLANS_FAILURE,
  FETCH_MEMBERSHIP_PLANS_REQUEST,
  FETCH_MEMBERSHIP_PLANS_SUCCESS,
  MEMBERSHIP_BOOKING_FAILURE,
  MEMBERSHIP_BOOKING_REQUEST,
  MEMBERSHIP_BOOKING_SUCCESS,
  MEMEBRSHIP_PAYMENT_FAILURE,
  MEMEBRSHIP_PAYMENT_REQUEST,
  MEMEBRSHIP_PAYMENT_SUCCESS,
} from '../constants/membershipconstant';
import { API_SERVER } from '../../config/Key';

export const getAllMembershipCategories = () => async dispatch => {
  try {
    dispatch({ type: FETCH_MEMBERSHIP_CATEGORY_REQUEST });

    const { data } = await axios.get(`${API_SERVER}/category/getall`);

    dispatch({
      type: FETCH_MEMBERSHIP_CATEGORY_SUCCESS,
      payload: data.categories,
    });

    // return data.categories;

    console.log('the data of membership categories', data.categories);
  } catch (error) {
    dispatch({
      type: FETCH_MEMBERSHIP_CATEGORY_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    console.log('categories fetching failure:', error.response?.data || error);
    throw error;
  }
};

export const getAllMembershipPlans = () => async dispatch => {
  try {
    dispatch({ type: FETCH_MEMBERSHIP_PLANS_REQUEST });

    const { data } = await axios.get(`${API_SERVER}/categoryplan/getall`);

    dispatch({
      type: FETCH_MEMBERSHIP_PLANS_SUCCESS,
      payload: data.membershipPlans,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MEMBERSHIP_PLANS_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    console.log(
      'membership plans fetching failure:',
      error.response?.data || error,
    );
    throw error;
  }
};

export const getMembershipPlanOffers = id => async dispatch => {
  try {
    dispatch({ type: FETCH_MEMBERSHIP_OFFERS_REQUEST });

    const { data } = await axios.get(
      `${API_SERVER}/categoryplan/plan/${id}/offers`,
    );

    dispatch({
      type: FETCH_MEMBERSHIP_OFFERS_SUCCESS,
      payload: data.planoffers,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MEMBERSHIP_OFFERS_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    console.log(
      'membership plan offers fetch failure:',
      error.response?.data || error,
    );
    throw error;
  }
};

export const createPaymentOrder = amount => async dispatch => {
  try {
    dispatch({ type: MEMEBRSHIP_PAYMENT_REQUEST });

    if (!amount || isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount');
    }
    const { data } = await axios.post(`${API_SERVER}/payment/create-order`, {
      amount,
    });

    dispatch({
      type: MEMEBRSHIP_PAYMENT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: MEMEBRSHIP_PAYMENT_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    console.log(
      'membership payment order failure:',
      error.response?.data || error,
    );
    throw error;
  }
};

export const createMembershipBooking = bookingData => async dispatch => {
  try {
    dispatch({ type: MEMBERSHIP_BOOKING_REQUEST });

    const { data } = await axios.post(
      `${API_SERVER}/bookings/booking/create`,
      bookingData,
      { withCredentials: true },
    );

    dispatch({
      type: MEMBERSHIP_BOOKING_SUCCESS,
      payload: data.booking,
    });

    return data.booking;
  } catch (error) {
    dispatch({
      type: MEMBERSHIP_BOOKING_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    console.log('membership booking failure:', error.response?.data || error);
    throw error;
  }
};

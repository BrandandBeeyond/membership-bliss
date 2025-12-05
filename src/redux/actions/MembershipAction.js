import axios from 'axios';
import {
  FETCH_MEMBERSHIP_CATEGORY_FAILURE,
  FETCH_MEMBERSHIP_CATEGORY_REQUEST,
  FETCH_MEMBERSHIP_CATEGORY_SUCCESS,
  FETCH_MEMBERSHIP_PLANS_FAILURE,
  FETCH_MEMBERSHIP_PLANS_REQUEST,
  FETCH_MEMBERSHIP_PLANS_SUCCESS,
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

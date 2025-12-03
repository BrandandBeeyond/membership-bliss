import {
  FETCH_MEMBERSHIP_CATEGORY_FAILURE,
  FETCH_MEMBERSHIP_CATEGORY_REQUEST,
  FETCH_MEMBERSHIP_CATEGORY_SUCCESS,
} from '../constants/membershipconstant';

let initialState = {
  loading: false,
  categories: [],
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBERSHIP_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MEMBERSHIP_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case FETCH_MEMBERSHIP_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

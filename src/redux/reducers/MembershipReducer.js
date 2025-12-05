import {
  FETCH_MEMBERSHIP_PLANS_FAILURE,
  FETCH_MEMBERSHIP_PLANS_REQUEST,
  FETCH_MEMBERSHIP_PLANS_SUCCESS,
} from '../constants/membershipconstant';

let initialState = {
  loading: false,
  membershipplans: [],
  error: null,
};

export const MembershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBERSHIP_PLANS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MEMBERSHIP_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        membershipplans: action.payload,
        error: null,
      };

    case FETCH_MEMBERSHIP_PLANS_FAILURE:
      return {
        ...state,
        loading: false,
        membershipplans: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

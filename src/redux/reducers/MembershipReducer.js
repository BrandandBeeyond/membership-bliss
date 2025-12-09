import {
  FETCH_MEMBERSHIP_OFFERS_FAILURE,
  FETCH_MEMBERSHIP_OFFERS_REQUEST,
  FETCH_MEMBERSHIP_OFFERS_SUCCESS,
  FETCH_MEMBERSHIP_PLANS_FAILURE,
  FETCH_MEMBERSHIP_PLANS_REQUEST,
  FETCH_MEMBERSHIP_PLANS_SUCCESS,
} from '../constants/membershipconstant';

let initialState = {
  loading: false,
  membershipplans: [],
  offers: [],
  error: null,
};

export const MembershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBERSHIP_PLANS_REQUEST:
    case FETCH_MEMBERSHIP_OFFERS_REQUEST:
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

    case FETCH_MEMBERSHIP_OFFERS_SUCCESS:
      return {
        ...state,
        loading: false,
        offers: action.payload,
        error: null,
      };

    case FETCH_MEMBERSHIP_PLANS_FAILURE:
    case FETCH_MEMBERSHIP_OFFERS_FAILURE:
      return {
        ...state,
        loading: false,
        membershipplans: [],
        offers: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

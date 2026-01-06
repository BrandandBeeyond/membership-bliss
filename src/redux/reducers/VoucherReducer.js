import {
  VOUCHER_REDEEM_FAILURE,
  VOUCHER_REDEEM_REQUEST,
  VOUCHER_REDEEM_SUCCESS,
} from '../constants/voucherconstant';

let initialState = {
  loading: false,
  redemption: null,
  error: null,
};

export const VoucherReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOUCHER_REDEEM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case VOUCHER_REDEEM_SUCCESS:
      return {
        ...state,
        loading: false,
        redemption: action.payload,
      };

    case VOUCHER_REDEEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

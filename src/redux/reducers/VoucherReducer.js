import {
  CHECK_VOUCHER_REDEEMTION_FAILURE,
  CHECK_VOUCHER_REDEEMTION_REQUEST,
  CHECK_VOUCHER_REDEEMTION_SUCCESS,
  RESEND_VOUCHER_VERIFY_CODE_FAILURE,
  RESEND_VOUCHER_VERIFY_CODE_REQUEST,
  RESEND_VOUCHER_VERIFY_CODE_SUCCESS,
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
    case RESEND_VOUCHER_VERIFY_CODE_REQUEST:
    case CHECK_VOUCHER_REDEEMTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case VOUCHER_REDEEM_SUCCESS:
    case RESEND_VOUCHER_VERIFY_CODE_SUCCESS:
    case CHECK_VOUCHER_REDEEMTION_SUCCESS:
      return {
        ...state,
        loading: false,
        redemption: action.payload,
      };

    case VOUCHER_REDEEM_FAILURE:
    case RESEND_VOUCHER_VERIFY_CODE_FAILURE:
    case CHECK_VOUCHER_REDEEMTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

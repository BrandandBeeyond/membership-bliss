import { API_SERVER } from '../../config/Key';
import axios from 'axios';
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

export const RequestVoucherRedeem =
  (membershipBookingId, offerId, quantityRequested) => async dispatch => {
    try {
      dispatch({ type: VOUCHER_REDEEM_REQUEST });

      const { data } = await axios.post(
        `${API_SERVER}/vouchers/voucher/redeem`,
        {
          membershipBookingId,
          offerId,
          quantityRequested,
        },
      );

      dispatch({
        type: VOUCHER_REDEEM_SUCCESS,
        payload: data.data,
      });

      return data.data;
    } catch (error) {
      dispatch({
        type: VOUCHER_REDEEM_FAILURE,
        payload: error.response?.data?.message || error.message,
      });
      console.log('voucher redeem failure:', error.response?.data || error);
      throw error;
    }
  };

export const resendVocuherRedeemCode = redemptionId => async dispatch => {
  try {
    dispatch({ type: RESEND_VOUCHER_VERIFY_CODE_REQUEST });

    const { data } = await axios.post(
      `${API_SERVER}/vouchers/voucher/redeem/resend-code`,
      { redemptionId },
    );

    dispatch({ type: RESEND_VOUCHER_VERIFY_CODE_SUCCESS, payload: data.data });

    return data.data;
  } catch (error) {
    dispatch({
      type: RESEND_VOUCHER_VERIFY_CODE_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    console.log(
      'voucher verify otp resend failure:',
      error.response?.data || error,
    );
    throw error;
  }
};

export const checkVoucherReedemtion =
  (membershipBookingId, offerId) => async dispatch => {
    try {
      dispatch({ type: CHECK_VOUCHER_REDEEMTION_REQUEST });

      const { data } = await axios.get(
        `${API_SERVER}/vouchers/voucher/redeem/check-pending`,
        {
          params: {
            membershipBookingId,
            offerId,
          },
        },
      );

      dispatch({
        type: CHECK_VOUCHER_REDEEMTION_SUCCESS,
        payload: data.data,
      });

      return data.data;
    } catch (error) {
      dispatch({
        type: CHECK_VOUCHER_REDEEMTION_FAILURE,
        payload: error?.response?.data?.message || error.message,
      });

      throw error;
    }
  };

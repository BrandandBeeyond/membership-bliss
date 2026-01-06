import { API_SERVER } from '../../config/Key';
import axios from 'axios';
import {
  VOUCHER_REDEEM_FAILURE,
  VOUCHER_REDEEM_REQUEST,
  VOUCHER_REDEEM_SUCCESS,
} from '../constants/voucherconstant';

export const RequestVoucherRedeem =
  (membershipBookingId, offerId, quantityRequested) => async dispatch => {
    try {
      dispatch({ type: VOUCHER_REDEEM_REQUEST });

      const { data } = await axios.post(`${API_SERVER}/vouchers/create`, {
        membershipBookingId,
        offerId,
        quantityRequested,
      });

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

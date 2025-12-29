import axios from 'axios';

import { API_SERVER } from '../../config/Key';
import {
  GET_UPDATES_FAILURE,
  GET_UPDATES_REQUEST,
  GET_UPDATES_SUCCESS,
} from '../constants/Updateconstant';

export const getAllUpdates = () => async dispatch => {
  try {
    dispatch({ type: GET_UPDATES_REQUEST });

    const { data } = await axios.get(`${API_SERVER}/updates/getall`);

    dispatch({
      type: GET_UPDATES_SUCCESS,
      payload: data.updates,
    });

    return data.updates;
  } catch (error) {
    dispatch({
      type: GET_UPDATES_FAILURE,
      payload: error.response?.data?.message || 'Failed to load updates',
    });
  }
};

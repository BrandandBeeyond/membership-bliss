import {
  GET_UPDATES_FAILURE,
  GET_UPDATES_REQUEST,
  GET_UPDATES_SUCCESS,
} from '../constants/Updateconstant';

let initialState = {
  loading: false,
  updates: [],
  error: null,
};

export const UpdatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UPDATES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_UPDATES_SUCCESS: {
      return {
        ...state,
        loading: false,
        updates: action.payload,
      };
    }

    case GET_UPDATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

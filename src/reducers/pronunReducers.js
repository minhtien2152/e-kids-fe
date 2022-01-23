import {
  PRONUN_CHECK_FAIL,
  PRONUN_CHECK_REQUEST,
  PRONUN_CHECK_SUCCESS,
} from "../constants/pronunConstants";

export const pronunCheckReducer = (state = {}, action) => {
  switch (action.type) {
    case PRONUN_CHECK_REQUEST:
      return { loading: true, pronun: {} };
    case PRONUN_CHECK_SUCCESS:
      return { loading: false, pronun: action.payload };
    case PRONUN_CHECK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

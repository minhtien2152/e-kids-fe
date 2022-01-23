import {
  PROGRESS_DETAIL_FAIL,
  PROGRESS_DETAIL_REQUEST,
  PROGRESS_DETAIL_SUCCESS,
  PROGRESS_UPDATE_FAIL,
  PROGRESS_UPDATE_REQUEST,
  PROGRESS_UPDATE_SUCCESS,
} from "../constants/progressConstants";

export const progressUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROGRESS_UPDATE_REQUEST:
      return { loading: true };
    case PROGRESS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PROGRESS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const progressDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case PROGRESS_DETAIL_REQUEST:
      return { loading: true, progress: [] };
    case PROGRESS_DETAIL_SUCCESS:
      return { loading: false, progress: action.payload };
    case PROGRESS_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

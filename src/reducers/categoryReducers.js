import {
  CATEGORY_DETAIL_FAIL,
  CATEGORY_DETAIL_REQUEST,
  CATEGORY_DETAIL_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../constants/categoryConstants";

export const categoryListReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const categoryDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DETAIL_REQUEST:
      return { loading: true, category: [] };
    case CATEGORY_DETAIL_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

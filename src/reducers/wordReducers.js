import {
  WORD_DETAIL_FAIL,
  WORD_DETAIL_REQUEST,
  WORD_DETAIL_SUCCESS,
  WORD_LIST_FAIL,
  WORD_LIST_REQUEST,
  WORD_LIST_SUCCESS,
} from "../constants/wordConstants";

export const wordListReducer = (state = {}, action) => {
  switch (action.type) {
    case WORD_LIST_REQUEST:
      return { loading: true, words: [] };
    case WORD_LIST_SUCCESS:
      return { loading: false, words: action.payload };
    case WORD_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const wordDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case WORD_DETAIL_REQUEST:
      return { loading: true, word: [] };
    case WORD_DETAIL_SUCCESS:
      return { loading: false, word: action.payload };
    case WORD_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

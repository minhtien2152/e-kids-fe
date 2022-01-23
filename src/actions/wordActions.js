import axios from "axios";
import { BACKEND } from "../../define";
import {
  WORD_DETAIL_FAIL,
  WORD_DETAIL_REQUEST,
  WORD_DETAIL_SUCCESS,
  WORD_LIST_FAIL,
  WORD_LIST_REQUEST,
  WORD_LIST_SUCCESS,
} from "../constants/wordConstants";
export const listWords = (body) => async (dispatch) => {
  try {
    dispatch({
      type: WORD_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND}/api/words`, {
      params: body,
    });

    dispatch({
      type: WORD_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: WORD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listWordDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: WORD_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND}/api/words/${id}`);

    dispatch({
      type: WORD_DETAIL_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: WORD_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

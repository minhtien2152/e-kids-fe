import axios from "axios";
import { BACKEND } from "../../define";
import {
  CATEGORY_DETAIL_FAIL,
  CATEGORY_DETAIL_REQUEST,
  CATEGORY_DETAIL_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../constants/categoryConstants";
export const listCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND}/api/categories`);

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listCategoryDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND}/api/categories/${id}`);

    dispatch({
      type: CATEGORY_DETAIL_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

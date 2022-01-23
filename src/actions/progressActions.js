import axios from "axios";
import { BACKEND } from "../../define";
import {
  PROGRESS_DETAIL_FAIL,
  PROGRESS_DETAIL_REQUEST,
  PROGRESS_DETAIL_SUCCESS,
  PROGRESS_UPDATE_FAIL,
  PROGRESS_UPDATE_REQUEST,
  PROGRESS_UPDATE_SUCCESS,
} from "../constants/progressConstants";
export const updateProgress =
  ({ user, word }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PROGRESS_UPDATE_REQUEST,
      });

      const { data } = await axios.patch(
        `${BACKEND}/api/progress/${user}/${word}`
      );

      dispatch({
        type: PROGRESS_UPDATE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: PROGRESS_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listProgressDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROGRESS_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND}/api/progress/${id}`);
    console.log(data);
    dispatch({
      type: PROGRESS_DETAIL_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: PROGRESS_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

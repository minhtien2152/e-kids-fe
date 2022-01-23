import axios from "axios";
import { FLASK } from "../../define";
import {
  PRONUN_CHECK_FAIL,
  PRONUN_CHECK_REQUEST,
  PRONUN_CHECK_SUCCESS,
} from "../constants/pronunConstants";
export const checkPronun =
  ({ file, word }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRONUN_CHECK_REQUEST,
      });
      var uploadSound = new FormData();

      uploadSound.append("file", file);
      uploadSound.append("word", word);

      const { data } = await axios.post(`${FLASK}/predict`, uploadSound);
      console.log("check pronun");
      dispatch({
        type: PRONUN_CHECK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRONUN_CHECK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

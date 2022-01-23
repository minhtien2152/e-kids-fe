import { combineReducers } from "redux";
import { categoryDetailReducer, categoryListReducer } from "./categoryReducers";
import {
  progressDetailReducer,
  progressUpdateReducer,
} from "./progressReducers";
import { pronunCheckReducer } from "./pronunReducers";

import {
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
} from "./userReducers";
import { wordDetailReducer, wordListReducer } from "./wordReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,

  categoryList: categoryListReducer,
  categoryDetail: categoryDetailReducer,

  wordList: wordListReducer,
  wordDetail: wordDetailReducer,

  pronunCheck: pronunCheckReducer,

  progressUpdate: progressUpdateReducer,
  progressDetail: progressDetailReducer,
});

export default reducer;

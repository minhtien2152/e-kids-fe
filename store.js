import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers/reducers";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;

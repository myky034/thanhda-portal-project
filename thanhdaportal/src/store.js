import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import studentReducer from "./redux/reducers/students";

const initialState = {};

const middleware = [thunk];
const rootReducer = combineReducers({studentReducer});

const store = configureStore({
  reducer: rootReducer,
  initialState,
  middleware
});

export default store;
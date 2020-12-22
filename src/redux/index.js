import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import application from "./application";
import logger from "redux-logger/src";

const rootReducer = combineReducers({
  application,
});
const index = createStore(rootReducer, applyMiddleware(thunk, logger));

export default index;

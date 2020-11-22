import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

export const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

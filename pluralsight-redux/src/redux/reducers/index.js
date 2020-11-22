import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { authorReducer } from "./authorReducer";

export const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
});

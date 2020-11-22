import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
} from "../actions/actionTypes";
import { initialState } from "./initialState";

export function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

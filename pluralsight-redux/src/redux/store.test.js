import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { initialState } from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it('should handle creating courses', () => {
  const store = createStore(rootReducer, initialState);
  const course = {
    id: 0,
    title: 'Clean Code'
  };
  const courseUpdated = {
    id: 0,
    title: 'Haskell in Action'
  };

  store.dispatch(courseActions.createCourseSuccess(course));

  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);

  store.dispatch(courseActions.updateCourseSuccess(courseUpdated));

  const updatedCourse = store.getState().courses[0];
  expect(updatedCourse).toEqual(courseUpdated);
});
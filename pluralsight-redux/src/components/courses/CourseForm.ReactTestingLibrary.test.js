import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
})

it("sets submit button label to saving when saving is true", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});

it("sets submit button label to saving when saving is false", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

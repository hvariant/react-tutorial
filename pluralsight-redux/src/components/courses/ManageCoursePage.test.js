import React from "react";
import { mount } from "enzyme";
import { authors, courses } from "../../../tools/mockData";
import { ManageCoursesPage } from "./ManageCoursePage";

function renderPage(args) {
  const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: "",
  };
  const defaultProps = {
    authors,
    courses,
    course: newCourse,
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    match: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursesPage {...props} />);
}

it("sets error when saving with an empty title field", () => {
  const wrapper = renderPage();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});

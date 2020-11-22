import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("contains 3 navlinks via shadow", () => {
  expect(shallow(<Header />).find("NavLink").length).toEqual(3);
});

it("contains 3 navlinks via mount", () => {
  expect(
    mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ).find("a").length
  ).toEqual(3);
});

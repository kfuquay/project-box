import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ProjectTile from "./ProjectTile";

describe(`ProjectTile Component`, () => {
  const props = { project: { id: 1, title: "test" } };

  it("renders correctly given project prop", () => {
    const wrapper = shallow(<ProjectTile {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

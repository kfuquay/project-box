import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoadingIndicator from './LoadingIndicator';

describe(`LoadingIndicator component`, () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LoadingIndicator/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

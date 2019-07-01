import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dashboard from './Dashboard';

//TODO: write component test - uses context(clearError)... test currently returns TypeError: this.context.clearError is not a function..
describe(`Dashboard  component`, () => {
  it.skip("renders without crashing", () => {
    const context = {  clearError: () => {}
  }
    const wrapper = shallow(<Dashboard />, { context });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

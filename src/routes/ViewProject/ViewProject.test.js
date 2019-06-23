import React from "react";
import enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ViewProject from './ViewProject';

// //TODO: write test for this component - uses context and this.props.match.params...
// describe(`View Project component`, () => {
//   it("renders without crashing", () => {
   
//     const wrapper = shallow(<ViewProject />);
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });
// });

test.skip('renders without crashing', () => {

  let mock: any = jest.fn();

  const wrapper = enzyme.mount(
      <ViewProject
          match = {{params: {id: 1}}}
          context = {{projectList: {id: 1, title: 'test', summary: 'test'}}}
          project = {{title: 'test'}}
            />
    );

  expect(wrapper).not.toBeNull();
});
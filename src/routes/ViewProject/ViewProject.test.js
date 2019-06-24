// import React from "react";
import enzyme, { shallow } from "enzyme";
// import toJson from "enzyme-to-json";
// import ViewProject from './ViewProject';

// //TODO: write test for this component - uses context and this.props.match.params...
// describe(`View Project component`, () => {
//   it("renders without crashing", () => {
   
//     const wrapper = shallow(<ViewProject />);
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });
// });

// test.skip('renders without crashing', () => {

//   let mock: any = jest.fn();

//   const wrapper = enzyme.mount(
//       <ViewProject
//           match = {{params: {id: 1}}}
//           context = {{projectList: {id: 1, title: 'test', summary: 'test'}}}
//           project = {{title: 'test'}}
//             />
//     );

//   expect(wrapper).not.toBeNull();
// });


// import React from "react";
// import ViewProject from './ViewProject';
// import { mount } from 'enzyme';

// // ensure you're resetting modules before each test
// beforeEach(() => {
//   jest.resetModules();
// });

// // Takes the context data we want to test, or uses defaults
// const getProjectListContext = (context = {projectList: [{title: 'test', summary: 'test', id: 1}]}) => {
  
//   // Will then mock the ProjectContext module being used in Edit component
//   jest.doMock('../../Context/ProjectContext.js', () => {
//     return {
//       getProjectListContext: {
//         Consumer: (props) => props.children(context)
//       }
//     }
//   });
  
//   // you need to re-require after calling jest.doMock.
//   // return the updated Edit module that now includes the mocked context
//   return require('./ViewProject').ViewProject;
// };

describe.skip('<ViewProject />', () => {
  it('should return one <h1></h1>', () => {
    // This will use the default context param since we pass nothing
    const projectList = getProjectListContext();
    const match = { params: { id: 1 } }
    const component = shallow(<ViewProject match={match} context={context} />)
    expect(component.find('h1').length).toBe(1)
    // const wrapper = mount(<ViewProject match={match}
    //   />);
    // expect(wrapper.find('h1').length).toBe(1);
  });

});
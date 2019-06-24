import React from "react";
import Edit from './Edit';
import { mount } from 'enzyme';

// ensure you're resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// Takes the context data we want to test, or uses defaults
const getProjectListContext = (context = {projectList: [{title: 'test', summary: 'test', id: 1}]}) => {
  
  // Will then mock the ProjectContext module being used in Edit component
  jest.doMock('../../Context/ProjectContext.js', () => {
    return {
      getProjectListContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });
  
  // you need to re-require after calling jest.doMock.
  // return the updated Edit module that now includes the mocked context
  return require('./Edit').Edit;
};

describe('<Edit />', () => {
  it('should return one <h1></h1>', () => {
    // This will use the default context param since we pass nothing
    const projectList = getProjectListContext();
    const wrapper = mount(<Edit />);
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('should return one <ProjectForm />', () => {
    const projectList = getProjectListContext();
    const wrapper = mount(<Edit />);
    expect(wrapper.find('ProjectForm').length).toBe(1)
  })

});
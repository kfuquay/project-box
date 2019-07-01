import React from 'react'
import ViewProject from './ViewProject'
import ProjectContext from '../../Context/ProjectContext'
import {shallow, mount} from 'enzyme'

describe("ViewProject component", () => {
  it.skip("renders", () => {
    // const context = {
    //   projectList: [
    //     { title: "test", summary: "test", materials: [""], steps: [""], id: 1 }
    //   ],
    //   deleteProject: () => {},
    //   handleClickCancel: () => {}
    // };

    // const wrapper = shallow(
    //   // <ProjectContext.Provider value={context}>
    //   <ViewProject match={{ params: { id: 1 } }} />,
    //   { context }
    //   // </ProjectContext.Provider>
    // );

    const wrapper = mount(<ViewProject />, { 
      context: { test: 'ray'}, 
      childContextTypes: React.PropTypes.object
    });
    // console.log(wrapper.debug());
    expect(wrapper.find(".main-container").length).toBe(0);
  });
});


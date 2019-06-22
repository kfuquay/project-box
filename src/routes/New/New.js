import React from "react";
import ProjectForm from '../../components/ProjectForm/ProjectForm'

function New() {
  return(
    <div className="main-container">
      <h3 className="large-text">New Project</h3>
      <ProjectForm params={{ edit: 'N' }} />
    </div>
  )
}

export default New;

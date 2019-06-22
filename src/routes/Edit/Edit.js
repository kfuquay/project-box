import React, { Component } from 'react'
import ProjectContext from '../../Context/ProjectContext'
import ProjectForm from '../../components/ProjectForm/ProjectForm'

class Edit extends Component {

    static contextType = ProjectContext;

    render(){
        const project = this.context.projectList.find(
            project => project.id === Number(this.props.match.params.id)
          );
        return(
            <div className="main-container">
                <h1 className="large-text">Edit </h1>
                <ProjectForm params={{ edit: 'Y', project: {...project} }} />
            </div>
        )
    }
}

export default Edit;
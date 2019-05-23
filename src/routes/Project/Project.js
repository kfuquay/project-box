import React, { Component, Fragment } from "react";
import ProjectContext from "../../Context/ProjectContext";
import './Project.css'

class Project extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = ProjectContext;

  render() {
    const project = this.context.projects.find(
      project => project.id === Number(this.props.match.params.id)
    );
    return (
      <Fragment>
        <section className="project-container">
          <h2 className="project-header">{project.title}</h2>
          <p className="project-summary">
            Summary: </p><p>{project.summary}
          </p>
          <p>Materials Needed:</p>
          <ul className="materials-list">
            {project.materials.map(material => {
              return <li>{material.name}</li>
            })}
          </ul>
          <p>Steps:</p>
          <ol className="steps-list">
          {project.steps.map(step => {
            return <li>{step.name}</li>
          })}
          </ol>
          {/* <Link to="/home">
            <button
              className="deleteProjectButton"
              onClick={() =>
                this.context.deleteProjectRequest(project.id, this.context.deleteProject)
              }
            >
              {" "}
              Delete Project
            </button>
          </Link> */}
        </section>
      </Fragment>
    );
  }
}

export default Project;

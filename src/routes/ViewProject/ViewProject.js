import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../Context/ProjectContext";
import "./ViewProject.css";

class ViewProject extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = ProjectContext;

  render() {
    const project = this.context.projectList.find(
      project => project.id === Number(this.props.match.params.id)
    );
    return (
      <Fragment>
        <section className="main-container">
          <h1 className="large-text">{project.title}</h1>
          <p className="section-header">Summary: </p>
          <p className="view-text text">{project.summary}</p>
          {project.materials[0] === "" ? (
            <Fragment />
          ) : (
            <Fragment>
              <p className="section-header">Materials Needed:</p>{" "}
              <ul>
                {project.materials.map((material, index) => {
                  return <li  className="text" key={index}>{material}</li>;
                })}
              </ul>
            </Fragment>
          )}
          {project.steps[0] === "" ? (
            <Fragment />
          ) : (
            <Fragment>
              <p className="section-header">Steps:</p>
              <ol>
                {project.steps.map((step, index) => {
                  return <li className="text" key={index}>{step}</li>;
                })}
              </ol>
            </Fragment>
          )}
          <p className="section-header">
            Created By: <span className="text">{project.username}</span>
          </p>

          <div className="button-section">
            <button className="button" onClick={this.context.handleClickCancel}>
              Back
            </button>

            {this.context.currentUserId === project.user_id ? (
              <Fragment>
                <Link id="edit-link" to={`/edit/${project.id}`}>
                  <button className="button">Edit Project</button>
                </Link>
                <button
                  className="button"
                  onClick={() => this.context.deleteProject(project.id)}
                >
                  Delete Project
                </button>
              </Fragment>
            ) : (
              <Fragment />
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ViewProject;

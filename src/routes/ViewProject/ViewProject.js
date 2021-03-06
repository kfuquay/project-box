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
    //Get selected project
    const project = this.context.projectList.find(
      project => project.id === Number(this.props.match.params.id)
    );
    return (
      <Fragment>
        <section className="main-container">
          <h1 className="large-text">{project.title}</h1>
          <p className="section-header first-section">Summary: </p>
          <p className="alt-text view-text">{project.summary}</p>
          {project.materials[0] === "" ? (
            <Fragment />
          ) : (
            <Fragment>
              <p className="section-header">Materials Needed:</p>{" "}
              <ul>
                {project.materials.map((material, index) => {
                  return (
                    <li className="alt-text view-text" key={index}>
                      {material}
                    </li>
                  );
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
                  return (
                    <li className="alt-text view-text" key={index}>
                      {step}
                    </li>
                  );
                })}
              </ol>
            </Fragment>
          )}
          <p className="section-header">
            Created By: <span className="alt-text text">{project.username}</span>
          </p>

          <div className="button-section">
            <button className="button" onClick={this.context.handleClickCancel}>
              Back
            </button>

            {/* render edit and delete buttons only if current user created that project */}
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

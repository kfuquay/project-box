import React, { Fragment } from "react";
import ProjectsApiService from "../../services/project-api-service";
import ProjectContext from "../../Context/ProjectContext";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator'
import "./Dashboard.css";

class Dashboard extends React.Component {
  static contextType = ProjectContext;

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      query: "",
      results: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.context.clearError();
    this.setState({ isLoading: true })
    ProjectsApiService.getProjects()
      .then(this.context.setProjectList)
      .then(this.setState({isLoading: false}))
      .catch(this.context.setError);
  }

  handleSwitch = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  updateQueryValue = e => {
    this.setState({ results: [], query: e.target.value }, function() {
      this.handleSearch();
    });
  };

  handleSearch = () => {
    const query = this.state.query;
    if (query.length >= 1) {
      const results = this.context.projectList.filter(project =>
        project.title.includes(`${query}`)
      );
      this.setState({ results });
    } else {
      const results = this.context.projectList;
      this.setState({ results });
    }
  };

  renderProjects() {
    const results =
      this.state.results.length < 1
        ? this.context.projectList
        : this.state.results;
    if (this.state.isChecked) {
      return results
        .filter(project => project.user_id === this.context.currentUserId)
        .map(project => <ProjectTile key={project.id} project={project} />);
    } else {
      return results.map(project => (
        <ProjectTile key={project.id} project={project} />
      ));
    }
  }

  render() {
    console.log(this.state.isLoading)
    const greeting =
      this.context.currentUser !== "" ? (
        <h2>{this.context.currentUser}'s Dashboard</h2>
      ) : (
        <h2>Dashboard</h2>
      );
    const { error } = this.context;
    return (
      <section className="project-list">
        <header className="list-header">{greeting}</header>
        {this.context.currentUser !== "" ? (
          <label className="switch">
            <input
              className="switch-input"
              type="checkbox"
              onChange={this.handleSwitch}
            />
            <span className="switch-label" data-on="Mine" data-off="All" />
            <span className="switch-handle" />
          </label>
        ) : (
          <Fragment />
        )}

        <div className="search-container">
          <input
            type="text"
            placeholder="search for..."
            value={this.state.query}
            onChange={e => this.updateQueryValue(e)}
          />
        </div>
        <div>
          {this.state.isLoading && this.context.error === null? <LoadingIndicator /> : <Fragment />}
        </div>

        <div className="list-projecttiles" aria-live="polite">
          {error ? (
            <p className="error">Sorry, there was an error</p>
          ) : (
            this.renderProjects()
          )}
        </div>
      </section>
    );
  }
}

export default Dashboard;

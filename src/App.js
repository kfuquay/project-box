import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ProjectContext from "./Context/ProjectContext";
import ProjectsApiService from "./services/project-api-service";
import Nav from "./components/Navigation/Nav";
import NotFound from "./routes/NotFound/NotFound";
import LandingPage from "./routes/LandingPage/LandingPage";
import Login from "./routes/Login/Login";
import Dashboard from "./routes/Dashboard/Dashboard";
import ViewProject from "./routes/ViewProject/ViewProject";
import New from "./routes/New/New";
import Edit from "./routes/Edit/Edit";
import "./App.css";

class App extends Component {
  static defaultProps = {
    store: {
      projects: [],
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      currentUserId: "",
      loginUsername: "",
      projectList: [],
      error: null,
      project: "",
    };
  }

  //the following functions are distributed through app in ProjectContext
  clearError = () => {
    this.setState({ error: null });
  };

  clearProject = project => {
    this.setState({ project: "" });
  };

  deleteProject = projectId => {
    ProjectsApiService.deleteProject(projectId)
      .then(() => this.props.history.push("/dashboard"))
  };

  editProject = project => {
    ProjectsApiService.editProject(project);
    this.props.history.push("/dashboard");
  };


  handleClickCancel = () => {
    this.props.history.push("/dashboard");
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({ currentUser: this.state.loginUsername });
    this.props.history.push("/dashboard");
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

  handleSubmitNewProject = project => {
    ProjectsApiService.postProject(project)
      .then(() => this.props.history.push("/dashboard"))
  };

  handleUsernameChange = e => {
    this.setState({ loginUsername: e.target.value });
  };

  redirectToLogin = () => {
    this.props.history.push("/login");
  };

  setCurrentUser = username => {
    this.setState({ currentUser: username });
  };

  setCurrentUserId = userId => {
    this.setState({ currentUserId: userId });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  setProjectList = projectList => {
    this.setState({ projectList });
  };

  setProject = project => {
    this.setState({ project });
  };

  render() {
    const contextValue = {
      clearError: this.clearError,
      clearProject: this.clearProject,
      currentUser: this.state.currentUser,
      currentUserId: this.state.currentUserId,
      deleteProject: this.deleteProject,
      editProject: this.editProject,
      handleClickCancel: this.handleClickCancel,
      handleLogin: this.handleLogin,
      handleLoginSuccess: this.handleLoginSuccess,
      handleSubmitNewProject: this.handleSubmitNewProject,
      handleUsernameChange: this.handleUsernameChange,
      loginUsername: this.state.loginUsername,
      projects: this.state.projects,
      projectList: this.state.projectList,
      redirectToLogin: this.redirectToLogin,
      setCurrentUser: this.setCurrentUser,
      setCurrentUserId: this.setCurrentUserId,
      setError: this.setError,
      setProject: this.setProject,
      setProjectList: this.setProjectList,
    };

    return (
      <div className="app">
        <header className="app-header">
          <Nav />
        </header>
        <main className="app-main">
          <ProjectContext.Provider value={contextValue}>
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route path={"/login"} component={Login} />
              <Route path={"/dashboard"} component={Dashboard} />
              <Route path={"/new"} component={New} />
              <Route path={"/project/:id"} component={ViewProject} />
              <Route path={"/edit/:id"} component={Edit} />
              <Route component={NotFound} />
            </Switch>
          </ProjectContext.Provider>
        </main>
      </div>
    );
  }
}

export default withRouter(App);

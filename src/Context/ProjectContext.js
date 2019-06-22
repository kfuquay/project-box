import React from "react";

const ProjectContext = React.createContext({
  clearError: () => {},
  clearProject: () => {},
  currentUser: "",
  currentUserId: '',
  deleteProject: () => {},
  editProject: () => {},
  error: null,
  handleClickCancel: () => {},
  handleLogin: () => {},
  handleLoginSuccess: () => {},
  handleUsernameChange: () => {},
  handleSubmitNewProject: () => {},
  project: "",
  projectList: [],
  redirectToLogin: () => {},
  setCurrentUser: () => {},
  setCurrentUserId: () => {},
  setError: () => {},
  setProject: () => {},
  setProjectList: () => {},
});

export default ProjectContext;

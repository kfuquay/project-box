import config from "../config";
import TokenService from "./token-service";
const ProjectsApiService = {
  getProjects() {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      headers: {},
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getProject(projectId) {
    return fetch(`${config.API_ENDPOINT}/projects/${projectId}`, {
      headers: {},
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postProject(project) {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(project),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  editProject(project) {
    return fetch(`${config.API_ENDPOINT}/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    }).then(res => (!res.ok ? e => Promise.reject(e) : {}));
  },
  deleteProject(projectId) {
    return fetch(`${config.API_ENDPOINT}/projects/${projectId}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  },
};

export default ProjectsApiService;

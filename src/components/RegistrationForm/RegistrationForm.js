import React, { Component, Fragment } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import ProjectContext from "../../Context/ProjectContext";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import("./RegistrationForm.css");

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  static contextType = ProjectContext;

  state = { error: null, isLoading: false };

  handleRegistrationFormSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target;
    this.setState({ error: null, isLoading: true });
    AuthApiService.postUser({
      username: username.value,
      password: password.value
    })
      .then(res => {
        AuthApiService.postLogin({
          username: username.value,
          password: password.value
        }).then(res => {
          this.context.setCurrentUser(username.value);
          this.context.setCurrentUserId(res.user_id);
          username.value = "";
          password.value = "";
          TokenService.saveAuthToken(res.authToken);
          this.context.handleLoginSuccess();
          this.setState({ isLoading: false });
        });
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <Fragment>
        {this.state.isLoading && this.state.error === null ? (
          <LoadingIndicator />
        ) : (
          <form onSubmit={this.handleRegistrationFormSubmit}>
            {this.state.error !== null && this.state.error !== undefined ? (
              <p className="error">{this.state.error}</p>
            ) : (
              ""
            )}
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username..."
                aria-required="true"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password..."
                aria-required="true"
                required
              />
              <p aria-live="polite" className="small-text">
                Password must be between 8-72 characters and contain at least
                one uppercase, lowercase, number and special character
              </p>
            </div>
            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        )}
      </Fragment>
    );
  }
}

export default RegistrationForm;

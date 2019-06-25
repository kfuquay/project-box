import React, { Component, Fragment } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import ProjectContext from "../../Context/ProjectContext";
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = ProjectContext;

  state = { error: null, isLoading: false };

  //log in user, render LoadingIndicator/spinner whilst waiting for response from server
  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null, isLoading: true });
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        this.context.setCurrentUser(username.value);
        this.context.setCurrentUserId(res.user_id);
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.setState({ isLoading: false });
        this.context.handleLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <Fragment>
        {this.state.isLoading && this.state.error === null ? (
          <LoadingIndicator />
        ) : (
          <Fragment>
            <form onSubmit={this.handleSubmitJwtAuth}>
              <div role="alert">
                {error && <p className="error">{error}</p>}
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username..."
                  aria-required="true"
                  onChange={this.context.handleUsernameChange}
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
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </Fragment>
        )}{" "}
      </Fragment>
    );
  }
}

export default LoginForm;

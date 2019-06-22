import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

 

  render() {
    return (
      <div className="main-container">
        <LoginForm />
      </div>
    );
  }
}
export default Login;

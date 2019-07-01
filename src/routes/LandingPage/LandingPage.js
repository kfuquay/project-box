import React, { Fragment, Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import ProjectContext from "../../Context/ProjectContext";
import "./LandingPage.css";
import knit from "../../images/knit.png";
import paint from "../../images/paint.png";
import tools from "../../images/tools.png";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

class LandingPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = ProjectContext;

  state = { error: null, isLoading: false };

  //log in user with demo account, render LoadingIndicator/spinner whilst waiting for response from server
  handleDemo = e => {
    e.preventDefault();
    this.setState({ error: null, isLoading: true });

    const username = "test";
    const password = "Testing123!";

    AuthApiService.postLogin({
      username: username,
      password: password
    })
      .then(res => {
        this.context.setCurrentUser(username);
        this.context.setCurrentUserId(res.user_id);
        
        TokenService.saveAuthToken(res.authToken);
        this.setState({ isLoading: false });
        this.context.handleLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <Fragment>
        {" "}
        {this.state.isLoading && this.state.error === null ? (
          <LoadingIndicator />
        ) : (
          <div className="main-container">
            <section>
              <header className="large-text">
                <h3>A Place For Projects</h3>
              </header>
              <img src={tools} alt="craft tools on paper" className="img" />
              <p className="lp-text text">
                Project Box helps you record how you made that thing! Like
                grandma's old recipe book, Project Box is a reliable reference
                that helps you remember the recipe for your project.
              </p>
            </section>
            <section className="lp-section">
              <header className="large-text">
                <h3>Record</h3>
              </header>
              <img src={knit} alt="yellow knit" className="img" />
              <p className="lp-text text">
                Record your projects with ease, simply input your materials
                list, process pictures, steps, and any other notes relevant to
                your project
              </p>
            </section>
            <section className="lp-section">
              <header className="large-text">
                <h3>Discover</h3>
              </header>
              <img src={paint} alt="colorful artists paints" className="img" />
              <p className="lp-text text">
                Browse project box and get started on your next craft
              </p>
            </section>
            <section className="lp-section">
              <header className="large-text">
                <h3>Demo</h3>
              </header>
              <p className="lp-text text">
                <button className="lp-text text" id="unbutton" onClick={this.handleDemo}>Click</button> through to demo
                Project Box
              </p>
            </section>
            <section className="lp-section">
              <header className="large-text">
                <h3>Join</h3>
              </header>
              <RegistrationForm />
            </section>
          </div>
        )}{" "}
      </Fragment>
    );
  }
}
export default LandingPage;

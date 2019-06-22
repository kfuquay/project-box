import React, { Component } from "react";
import "./LandingPage.css";
import knit from "../../images/knit.png";
import paint from "../../images/paint.png";
import tools from "../../images/tools.png";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

class LandingPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  render() {
    return (
      <div className="main-container">
        <section>
          <header className="large-text">
            <h3>A Place For Projects</h3>
          </header>
          <img src={tools} alt="craft tools on paper" className="img" />
          <p className="lp-text text">
            Project Box helps you record how you made that thing! Like grandma's
            old recipe book, Project Box is a reliable reference that helps you
            remember the recipe for your project.
          </p>
        </section>
        <section>
          <header className="large-text">
            <h3>Record</h3>
          </header>
          <img src={knit} alt="yellow knit" className="img" />
          <p className="lp-text text">
            Record your projects with ease, simply input your materials list,
            process pictures, steps, and any other notes relevant to your
            project
          </p>
        </section>
        <section>
          <header className="large-text">
            <h3>Discover</h3>
          </header>
          <img src={paint} alt="colorful artists paints" className="img" />
          <p className="lp-text text">
            Browse project box and get started on your next craft
          </p>
        </section>
        <section>
          <header className="large-text">
            <h3>Join</h3>
          </header>
          <RegistrationForm />
        </section>
      </div>
    );
  }
}
export default LandingPage;

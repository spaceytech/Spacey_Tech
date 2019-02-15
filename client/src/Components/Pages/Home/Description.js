import React, { Component } from "react";
import PropTypes from "prop-types";

class Description extends Component {
  componentDidMount() {
    this.props.passRef(this.description);
  }
  render() {
    return (
      <main
        className="home__description"
        ref={element => (this.description = element)}
      >
        <h1 className="home__description--title">How does Spacer work</h1>
        <div className="home__description--detail detail--1">
          <img src="images/seo.svg" alt="Task finding image" />
          <span>1</span>
          <h2>Describe the task</h2>
          <p>
            Choose from a variety of home services and select the day and time
            you'd like a qualified Tasker to show up. Give us the details and
            we'll find you the help.
          </p>
        </div>
        <div className="home__description--detail detail--2">
          <img src="images/profile.svg" alt="Profile matching image" />
          <span>2</span>
          <h2>Get matched</h2>
          <p>
            Select from a list of qualified and fully vetted Taskers for the
            job. Choose Taskers by their hourly rate and start chatting with
            them right in the app.
          </p>
        </div>
        <div className="home__description--detail detail--3">
          <img src="images/test.svg" alt="Confirm todo image" />
          <span>3</span>
          <h2>Get it done</h2>
          <p>
            Just like that, your Tasker arrives and gets the job done. When your
            task is complete, payment will happen seamlessly and securely
            through the app.
          </p>
        </div>
      </main>
    );
  }
}

export default Description;

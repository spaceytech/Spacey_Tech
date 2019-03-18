import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisteredSuccess extends Component {
  render() {
    return (
      <div className="dashboard__container--success">
        <h1>Your registration to become a Tasker has been received.</h1>
        <p>
          Thanks for your interest in joining the Spacey Community! We will send
          you an email with the next steps regarding your registration.
        </p>
        <Link to={"/"} className="button">
          <button>Return to Homepage</button>
        </Link>
      </div>
    );
  }
}

export default RegisteredSuccess;

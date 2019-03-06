import React from "react";
import PropTypes from "prop-types";

const GetStarted = props => {
  return (
    <div className="work__start">
      <h1>Get Started</h1>
      <div className="work__start--card">
        <img src="images/laptop.svg" />
        <h2>Register Online</h2>
        <p>
          Complete the signup form and pay the £10 registration fee and check
          your email for a link to a virtual onboarding session.
        </p>
      </div>
      <div className="work__start--card">
        <img src="images/people.svg" />
        <h2>Attend Info Session</h2>
        <p>We require identity verification for all applicants.</p>
      </div>
      <div className="work__start--card">
        <img src="images/screw.svg" />
        <h2>Start tasking</h2>
        <p>Download the Tasker app and accept your first job</p>
      </div>
    </div>
  );
};

export default GetStarted;

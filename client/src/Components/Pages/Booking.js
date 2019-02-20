import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link, withRouter } from "react-router-dom";

class Booking extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="book">
        <div className="book__head">
          <Link to="/" className="book__logo">
            <h2 className="navigation__logo">
              spacey<span style={{ color: "rgb(0, 188, 135)" }}>.</span>
            </h2>
          </Link>
        </div>
        <div className="book__nav">
          <ul>
            <Link to={`/dashboard/form`} className="fill">
              <li>1. Fill out task details</li>
            </Link>
            <Link to={`/dashboard/recommend`} className="prices">
              <li>2. View tasks and prices</li>
            </Link>
            <Link to={`/dashboard/confirm`} className="confirm">
              <li>3. Confirm and book</li>
            </Link>
          </ul>
        </div>
        <div className="book__wrapper">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(Booking);

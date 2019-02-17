import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

class Booking extends Component {
  render() {
    return (
      <div className="book">
        <Link to="/" className="book__logo">
          <h2 className="navigation__logo">
            spacey<span style={{ color: "rgb(0, 188, 135)" }}>.</span>
          </h2>
        </Link>
        <div className="book__wrapper">
          <div className="book__wrapper--nav">
            <ul>
              <Link to={"/booking/form"}>
                <li>Fill out task details</li>
              </Link>
              <Link to={"/booking/recommend"}>
                <li>View tasks and prices</li>
              </Link>
              <li>Confirm and book</li>
            </ul>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(Booking);

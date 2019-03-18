import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link, NavLink, withRouter } from "react-router-dom";
import Auth from "../../AuthenticateUser";

class Booking extends Component {
  state = {
    links: [
      {
        to: "/dashboard/form",
        className: "fill",
        text: "1. Fill out task details"
      },
      {
        to: "/dashboard/recommend",
        className: "prices",
        text: "2. View tasks and prices",
        completed: false
      },
      {
        to: "/dashboard/confirm",
        className: "confirm",
        text: "3. Confirm and book",
        completed: false
      }
    ]
  };
  render() {
    console.log(this.props.link);
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
            {this.state.links.map(link => (
              <NavLink
                to={link.to}
                className={`${link.className} ${
                  link.completed === false ? "disabled-link" : ""
                }`}
                activeStyle={{
                  color: "var(--light-green)"
                }}
              >
                <li>{link.text}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="book__wrapper">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(Auth(Booking, true));

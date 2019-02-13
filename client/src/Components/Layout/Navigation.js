import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <h2 className="navigation__logo">
          spacey<span style={{ color: "rgb(0, 188, 135)" }}>.</span>
        </h2>
        <p className="navigation__items navigation__categories">Categories</p>
        <p className="navigation__items navigation__works">How it works</p>
        <p className="navigation__items navigation__sign-up">Sign up</p>
        <p className="navigation__items navigation__login">Login</p>
        <a href="#" className="navigation__button">
          <button>Become a tasker</button>
        </a>
      </nav>
    );
  }
}

export default Navigation;

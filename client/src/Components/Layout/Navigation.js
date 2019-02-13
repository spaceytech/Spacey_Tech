import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <h2 className="navigation__logo">spacey</h2>
        <p className="navigation__items navigation__categories">Categories</p>
        <p className="navigation__items navigation__works">How it works</p>
        <p className="navigation__items navigation__sign-up">Sign up</p>
        <p className="navigation__items navigation__login">Login</p>
        <p className="navigation__button">Become a tasker</p>
      </nav>
    );
  }
}

export default Navigation;

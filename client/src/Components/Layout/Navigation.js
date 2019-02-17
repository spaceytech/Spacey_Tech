import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Ui/Dropdown";

class Navigation extends Component {
  state = {
    showDropdown: false,
    ref: ""
  };

  defineRef = item => {
    this.setState({
      ref: item
    });
  };

  mouseEnter = () => {
    this.setState({ showDropdown: true });
  };

  mouseLeave = evt => {
    if (!this.state.ref.contains(evt.target)) {
      this.setState({ showDropdown: false });
    }
  };

  leaveDropDown = event => {
    if (!event.relatedTarget.textContent.includes("Categories")) {
      this.setState({ showDropdown: false });
    }
  };

  render() {
    return (
      <nav className="navigation">
        <Link to="/">
          <h2 className="navigation__logo">
            spacey<span style={{ color: "rgb(0, 188, 135)" }}>.</span>
          </h2>
        </Link>
        <div
          className="navigation__items navigation__categories"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          style={{
            borderTop: this.state.showDropdown
              ? "2px solid var(--light-green)"
              : ""
          }}
        >
          Categories
          {this.state.showDropdown ? (
            <Dropdown
              style={{ display: "block" }}
              passRef={this.defineRef}
              leaveDropDown={this.leaveDropDown}
              show={this.state.showDropdown}
            />
          ) : null}
        </div>
        <Link to="/signup" className="navigation__items navigation__sign-up">
          <div>Sign up</div>
        </Link>
        <Link to="/signin" className="navigation__items navigation__login">
          <div>Login</div>
        </Link>
        <a href="#" className="navigation__button button">
          <button>Become a tasker</button>
        </a>
      </nav>
    );
  }
}

export default Navigation;

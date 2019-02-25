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

  openMobileNav = () => {
    console.log(this.navElement.style.display);
    if (this.navElement.style.display === "flex") {
      this.navElement.style.display = "none";
    } else {
      this.navElement.style.display = "flex";
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
        <div id="myLinks" ref={element => (this.navElement = element)}>
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
          <a href="#" className="navigation__items navigation__button">
            <div>Become a tasker</div>
          </a>
        </div>
        {/* Default Navigation layout */}
        <div
          className="navigation__items navigation__categories default"
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
        <Link
          to="/signup"
          className="navigation__items navigation__sign-up default"
        >
          <div>Sign up</div>
        </Link>
        <Link
          to="/signin"
          className="navigation__items navigation__login default"
        >
          <div>Login</div>
        </Link>
        <a href="#" className="navigation__button button default">
          <button>Become a tasker</button>
        </a>
        {/* Mobile button icon */}
        <div className="navigation__mobileicon" onClick={this.openMobileNav}>
          <i class="fa fa-bars" />
        </div>
      </nav>
    );
  }
}

export default Navigation;

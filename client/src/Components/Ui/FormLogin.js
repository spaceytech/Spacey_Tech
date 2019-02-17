import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class FormLogin extends Component {
  render() {
    return (
      <div className="signin__wrapper">
        <h1>Sign in</h1>
        <p>
          Log in to your Spacey account. Or{" "}
          <Link to="/signup" style={{ color: "var(--light-green)" }}>
            <span>Sign up</span>
          </Link>{" "}
          instead.
        </p>
        <form>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#" className="button">
            <button>Sign in</button>
          </a>
        </form>
        <Link to="/">
          <p>Forgot your password? </p>
        </Link>
        <button id="facebook">Facebook</button>
        <button id="google">Google</button>
        <p style={{ fontSize: "1rem" }}>
          By signing up you agree to our{" "}
          <span style={{ color: "var(--light-green)", cursor: "pointer" }}>
            Terms of Use
          </span>{" "}
          and{" "}
          <span style={{ color: "var(--light-green)", cursor: "pointer" }}>
            Privacy Policy
          </span>
        </p>
      </div>
    );
  }
}

export default FormLogin;

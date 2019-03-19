import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { userLogin, login_status, auth_user } from "../../actions/userActions";

class FormLogin extends Component {
  state = {
    email: "",
    password: "",
    error: {}
  };

  removeError = (e, errorName) => {
    const error = this.state.error;
    let err = { ...error };
    delete err[errorName];
    this.setState({
      error: err
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLogin = e => {
    e.preventDefault();
    const userData = { ...this.state };
    this.props.dispatch(userLogin(userData)).then(response => {
      if (response.payload.message) {
        this.setState({
          error: response.payload
        });
      } else if (response.payload.success) {
        this.props.dispatch(login_status());
        this.props.dispatch(auth_user()).then(response => {
          this.props.history.push(
            `/account/${this.props.user.basic_info._id}/profile`
          );
        });
      }
    });
  };

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
          <span
            className="errorSpan"
            style={{ display: !this.state.error.message ? "none" : "flex" }}
          >
            {this.state.error.message}
            <span
              className="close"
              onClick={e => this.removeError(e, "message")}
            >
              &#11199;
            </span>
          </span>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={e => this.onChange(e)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => this.onChange(e)}
          />

          <div className="button">
            <button onClick={e => this.onLogin(e)}>Sign in</button>
          </div>
        </form>
        <Link to="/">
          <p>Forgot your password? </p>
        </Link>

        <p>
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

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(withRouter(FormLogin));

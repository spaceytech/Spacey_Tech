import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { userRegister, become_tasker } from "../../../actions/userActions";

class TaskerForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    postcode: "",
    error: {}
  };

  removeError = (e, errorName, index) => {
    const error = this.state.error;
    let err = { ...error };
    if (errorName === "password" || errorName === "postcode") {
      console.log(err[errorName][index]);
      delete err[errorName][index];
    } else {
      delete err[errorName];
    }

    this.setState({
      error: err
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onRegister = e => {
    e.preventDefault();
    const userData = { ...this.state };
    this.props.dispatch(userRegister(userData)).then(response => {
      if (response.payload.error) {
        let error = {};
        error.password = [];
        error.postcode = [];
        if (response.payload.error.length > 0) {
          response.payload.error.forEach((err, i) => {
            console.log(response.payload.error[i]);
            switch (response.payload.error[i].param) {
              case "first_name":
                error.first_name = response.payload.error[i].msg;
                break;
              case "last_name":
                error.last_name = response.payload.error[i].msg;
                break;
              case "email":
                error.email = response.payload.error[i].msg;
                break;
              case "password":
                error.password.push(response.payload.error[i].msg);
                break;
              case "postcode":
                error.postcode.push(response.payload.error[i].msg);
                break;
            }
          });
        } else {
          error.email = response.payload.error.email;
        }
        this.setState({
          error
        });
      } else if (response.payload.success) {
        this.props.dispatch(become_tasker());
        this.props.history.push("/signin");
      }
    });
  };
  render() {
    return (
      <div className="register__wrapper">
        <h1>Become a Tasker</h1>
        <p>
          Create an account to get started.<br /> Already have an account?{" "}
          <Link to="/signin" style={{ color: "var(--light-green)" }}>
            <span>Sign in</span>
          </Link>{" "}
          instead.
        </p>
        <form>
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={e => this.onChange(e)}
          />
          <span
            className="errorSpan"
            style={{
              display: !this.state.error.first_name ? "none" : "flex"
            }}
          >
            {this.state.error.first_name}
            <span
              className="close"
              onClick={e => this.removeError(e, "first_name")}
            >
              &#11199;
            </span>
          </span>
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={e => this.onChange(e)}
          />
          <span
            className="errorSpan"
            style={{
              display: !this.state.error.last_name ? "none" : "flex"
            }}
          >
            {this.state.error.last_name}
            <span
              className="close"
              onClick={e => this.removeError(e, "last_name")}
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
          <span
            className="errorSpan"
            style={{ display: !this.state.error.email ? "none" : "flex" }}
          >
            {this.state.error.email}
            <span className="close" onClick={e => this.removeError(e, "email")}>
              &#11199;
            </span>
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => this.onChange(e)}
          />
          {this.state.error.password
            ? this.state.error.password.map((err, i) => {
                return (
                  <span
                    className="errorSpan"
                    style={{
                      display: !this.state.error.password ? "none" : "flex"
                    }}
                  >
                    {err}
                    <span
                      className="close"
                      onClick={e => this.removeError(e, "password", i)}
                    >
                      &#11199;
                    </span>
                  </span>
                );
              })
            : null}
          <input
            type="text"
            name="postcode"
            placeholder="Postcode"
            onChange={e => this.onChange(e)}
          />
          {this.state.error.postcode
            ? this.state.error.postcode.map((err, i) => {
                return (
                  <span
                    className="errorSpan"
                    style={{
                      display: !this.state.error.postcode ? "none" : "flex"
                    }}
                  >
                    {err}
                    <span
                      className="close"
                      onClick={e => this.removeError(e, "postcode", i)}
                    >
                      &#11199;
                    </span>
                  </span>
                );
              })
            : null}

          <label for="acknowledge">
            <input type="checkbox" name="acknowledge" id="acknowledge" />
            <p>
              By ticking this box, I acknowledge that I have reviewed and agree
              to the
              <span style={{ color: "var(--light-green)", cursor: "pointer" }}>
                Terms and Conditions
              </span>
              and
              <span style={{ color: "var(--light-green)", cursor: "pointer" }}>
                Privacy Policy
              </span>
            </p>
          </label>

          <label for="opt-in">
            <input type="checkbox" name="opt-in" id="opt-in" />
            <p>
              I do not want to receive promotional emails and notifications from
              Spacey
            </p>
          </label>

          <div className="button">
            <button onClick={e => this.onRegister(e)}>Become a tasker</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(TaskerForm));

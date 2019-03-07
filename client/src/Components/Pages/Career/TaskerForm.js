import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskerForm extends Component {
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
          <input type="text" name="first_name" placeholder="First name" />
          <input type="text" name="last_name" placeholder="Last name" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input type="text" name="postcode" placeholder="Postcode" />

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

          <a href="#" className="button">
            <button>Become a tasker</button>
          </a>
        </form>
      </div>
    );
  }
}

export default TaskerForm;
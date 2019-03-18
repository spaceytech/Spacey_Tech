import React, { Component } from "react";

class Password extends Component {
  render() {
    return (
      <div className="profile__wrapper--component__password">
        <div className="profile__wrapper--component__password--headline">
          <h1>Change Password</h1>
        </div>
        <form className="profile__wrapper--component__password--form">
          <label>
            <p>Enter current password</p>
            <input type="password" name="password" />
          </label>
          <label>
            <p>Enter new password</p>
            <input type="password" name="password" />
          </label>
          <label>
            <p>Confirm new password</p>
            <input type="password" name="password" />
          </label>
          <div className="buttons">
            <div className="button cancel" onClick={e => e.preventDefault()}>
              <button>Cancel</button>
            </div>
            <div className="button save" onClick={e => e.preventDefault()}>
              <button>Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Password;

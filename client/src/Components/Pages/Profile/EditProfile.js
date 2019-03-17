import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EditProfile extends Component {
  render() {
    return (
      <div className="profile__wrapper--component__profile">
        <div className="profile__wrapper--component__profile--headline">
          <h1>Edit Account</h1>
        </div>
        <div className="profile__wrapper--component__profile--details">
          <img src="/images/user.png" />
          <form className="profile__wrapper--component__profile--form">
            <label>
              <p>First Name</p>
              <input type="text" name="first_name" />
            </label>
            <label id="second_column">
              <p>Last Name</p>
              <input type="text" name="last_name" />
            </label>
            <label>
              <p>Email</p>
              <input type="text" name="email" />
            </label>
            <label>
              <p>Phone number</p>
              <input type="text" name="phone" />
            </label>
            <label>
              <p>Postcode</p>
              <input type="text" name="postcode" />
            </label>
            <div className="buttons">
              <Link
                to={`/account/${this.props.user.basic_info._id}/profile`}
                className="button cancel"
              >
                <button>Cancel</button>
              </Link>
              <div className="button save">
                <button>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(EditProfile);

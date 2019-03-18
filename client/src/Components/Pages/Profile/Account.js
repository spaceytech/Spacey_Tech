import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logout_user } from "../../../actions/userActions";

class Account extends Component {
  logoutUser = e => {
    this.props.dispatch(logout_user()).then(response => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="profile__wrapper--component__profile">
        <div className="profile__wrapper--component__profile--headline">
          <h1>Account</h1>
          <Link
            to={`/account/${this.props.user.basic_info._id}/profile/edit`}
            className="button"
          >
            <button>Edit</button>
          </Link>
        </div>
        <div className="profile__wrapper--component__profile--details">
          <img src="/images/user.png" />
          <ul>
            <li>
              <i class="fas fa-user-alt" />
              <h2>
                {this.props.user.basic_info.first_name}{" "}
                {this.props.user.basic_info.last_name}
              </h2>
            </li>
            <li>
              <i class="fas fa-envelope" />
              <h2>{this.props.user.basic_info.email}</h2>
            </li>
            <li>
              <i class="fas fa-map-marker-alt" />
              <h2>{this.props.user.basic_info.postcode}</h2>
            </li>
            <li>
              <div className="button" onClick={e => this.logoutUser(e)}>
                <button>Log out</button>
              </div>
            </li>
          </ul>
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

export default connect(mapStateToProps)(withRouter(Account));

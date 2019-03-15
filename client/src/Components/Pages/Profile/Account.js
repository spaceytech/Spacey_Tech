import React, { Component } from "react";
import { connect } from "react-redux";

class Account extends Component {
  render() {
    return (
      <div className="profile__wrapper--component__profile">
        <div className="profile__wrapper--component__profile--headline">
          <h1>Account</h1>
          <div className="button">
            <button>Edit</button>
          </div>
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
              <div className="button">
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

export default connect(mapStateToProps)(Account);

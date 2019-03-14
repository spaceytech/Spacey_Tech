import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { connect } from "react-redux";

class WrapperNav extends Component {
  render() {
    return (
      <div className="profile__wrapper">
        <nav className="profile__wrapper--nav">
          <ul>
            <li>
              <NavLink
                to={`/account/${this.props.user.basic_info._id}/profile`}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/${this.props.user.basic_info._id}/password`}
              >
                Password
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/${this.props.user.basic_info._id}/billing_info`}
              >
                Billing Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/${this.props.user.basic_info._id}/profile`}
              >
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/${this.props.user.basic_info._id}/profile`}
              >
                Deactivate
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="profile__wrapper--component">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(withRouter(WrapperNav));

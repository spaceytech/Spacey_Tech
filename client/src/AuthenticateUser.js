import React, { Component } from "react";
import { connect } from "react-redux";
import { auth_user } from "./actions/userActions";
import { withRouter } from "react-router-dom";

export default function(ComposedComponent, privateStatus, adminRoute = null) {
  class AuthenticateUser extends Component {
    state = {
      loading: true
    };

    componentDidMount() {
      this.props.dispatch(auth_user()).then(res => {
        let user = this.props.user.basic_info
          ? this.props.user.basic_info
          : this.props.user;
        if (!user.isAuth) {
          if (privateStatus) {
            this.props.history.push("/signin");
          }
        } else {
          if (privateStatus === false) {
            this.props.history.push(
              `/account/${this.props.user.basic_info._id}/profile`
            );
          }
        }
        this.setState({
          loading: false
        });
      });
    }

    render() {
      console.log(privateStatus);
      if (this.state.loading) {
        return <p>Loading</p>;
      }
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.user
    };
  };

  return connect(mapStateToProps)(withRouter(AuthenticateUser));
}

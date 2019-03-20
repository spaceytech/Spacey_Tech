import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { delete_user } from "../../../actions/userActions";
import { connect } from "react-redux";

class Deactivate extends Component {
  deleteUser = e => {
    this.props
      .dispatch(delete_user(this.props.user.basic_info._id))
      .then(this.props.history.push("/"));
  };

  render() {
    return (
      <div className="profile__wrapper--component__password">
        <div className="profile__wrapper--component__password--headline">
          <h1>Deactivate</h1>
        </div>
        <p
          style={{
            fontSize: "2rem",
            fontFamily: "Lato, sans-serif"
          }}
        >
          Once you've deactivated your account, you will no longer be able to
          log in to the Spacey. This action cannot be undone.
        </p>
        <div className="button" onClick={e => this.deleteUser(e)}>
          <button
            style={{
              padding: "2rem",
              border: "2px solid var(--light-green)",
              borderRadius: "5px",
              background: "white",
              color: "var(--light-green)",
              fontSize: "1.7rem"
            }}
          >
            Deactivate account
          </button>
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

export default connect(mapStateToProps)(withRouter(Deactivate));

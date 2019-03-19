import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export default function(ComposedComponent) {
  class TaskerVerification extends Component {
    componentDidMount() {
      if (this.props.user.basic_info.tasker_registered) {
        this.props.history.push("/become_tasker/success");
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.user
    };
  };
  return connect(mapStateToProps)(withRouter(TaskerVerification));
}

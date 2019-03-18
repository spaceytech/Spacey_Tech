import React, { Component } from "react";
import Layout from "../Layout/Layout";
import Auth from "../../AuthenticateUser";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Layout>
          <div className="dashboard__container">
            <h1>Register to become a Tasker</h1>
            {this.props.children}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Auth(Dashboard, true);

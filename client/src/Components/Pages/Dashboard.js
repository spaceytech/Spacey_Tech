import React, { Component } from "react";
import Layout from "../Layout/Layout";

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

export default Dashboard;

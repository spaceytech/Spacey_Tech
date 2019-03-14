import React from "react";
import Layout from "../../Layout/Layout";
import WrapperNav from "./WrapperNav";
import { Route, withRouter } from "react-router-dom";

const Profile = props => {
  return (
    <div className="profile">
      <Layout>
        <div className="container">
          <h1 className="profile__headline">Your Account</h1>
          <WrapperNav>{props.children}</WrapperNav>
        </div>
      </Layout>
    </div>
  );
};

export default withRouter(Profile);

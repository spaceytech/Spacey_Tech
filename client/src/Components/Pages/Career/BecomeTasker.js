import React from "react";
import Header from "./Header";
import GetStarted from "./GetStarted";
import Footer from "../../Layout/Footer";
import Auth from "../../../AuthenticateUser";

const BecomeTasker = props => {
  return (
    <div className="work">
      <Header />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Auth(BecomeTasker, null);

import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = props => {
  return (
    <Fragment>
      <Navigation />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;

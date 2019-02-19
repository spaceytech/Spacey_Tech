import React from "react";
import PropTypes from "prop-types";

const Features = props => {
  return (
    <section className="home__features">
      <h3 className="home__features--text">As seen on</h3>
      <img src="images/logo-bbc.png" alt="Wired" className="bbc" />
      <img src="images/logo-bi.png" alt="Business Insider" className="bi" />
      <img src="images/times.png" alt="Tech Crunch" className="times" />
    </section>
  );
};

export default Features;

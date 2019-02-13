import React from "react";
import PropTypes from "prop-types";

const Services = props => {
  return (
    <section className="home__services">
      <img src="images/back.png" alt="background image" />
      <h1 className="home__services--title">Our services</h1>
      <a href="#">
        <p>Handyman service</p>
      </a>
      <a href="#">
        <p>Laundry service</p>
      </a>
      <a href="#">
        <p>Delivery service</p>
      </a>
      <a href="#">
        <p>End of tenancy service</p>
      </a>
      <a href="#">
        <p>Assembly service</p>
      </a>
      <a href="#">
        <p>Installation service</p>
      </a>
    </section>
  );
};

export default Services;

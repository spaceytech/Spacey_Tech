import React from "react";
import PropTypes from "prop-types";

const Services = props => {
  return (
    <section className="home__services">
      <img id="top" src="images/back.png" alt="background image" />
      <h1 className="home__services--title">Our services</h1>
      <a href="#" className="button">
        <button>General Handyman</button>
      </a>
      <a href="#" className="button">
        <button>Laundry</button>
      </a>
      <a href="#" className="button">
        <button>Delivery</button>
      </a>
      <a href="#" className="button">
        <button>Cleaning</button>
      </a>
      <a href="#" className="button">
        <button>Flat pack assembly</button>
      </a>
      <a href="#" className="button">
        <button>Installation</button>
      </a>
    </section>
  );
};

export default Services;

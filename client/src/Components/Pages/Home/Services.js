import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Services = props => {
  return (
    <section className="home__services">
      <img id="top" src="images/back.png" alt="background image" />
      <h1 className="home__services--title">Our services</h1>
      <Link to="/handyman" className="button">
        <button>General Handyman</button>
      </Link>
      <Link to="/laundry" className="button">
        <button>Laundry</button>
      </Link>
      <Link to="/delivery" className="button">
        <button>Delivery</button>
      </Link>
      <Link to="/cleaning" className="button">
        <button>Cleaning</button>
      </Link>
      <Link to="/assembly" className="button">
        <button>Flat pack assembly</button>
      </Link>
      <Link to="/installation" className="button">
        <button>Installation</button>
      </Link>
    </section>
  );
};

export default Services;

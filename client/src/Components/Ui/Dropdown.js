import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Dropdown extends Component {
  componentDidMount() {
    this.props.passRef(this.dropdownItem);
  }
  render() {
    return (
      <div
        className={`dropdown ${this.props.show ? "show" : ""}`}
        ref={element => (this.dropdownItem = element)}
        onMouseLeave={event => this.props.leaveDropDown(event)}
      >
        <div className="dropdown__text">
          <h2>What are you looking for?</h2>
          <p>Pick a task</p>
        </div>
        <ul className="dropdown__list">
          <Link to="/handyman">
            <li>
              <img src="/images/wrench.svg" alt="Wrench" />
              <p>General handyman</p>
            </li>
          </Link>
          <a href="#">
            <Link to="/laundry">
              <li>
                <img src="/images/washing-machine.svg" alt="Washing Machine" />
                <p>Laundry</p>
              </li>
            </Link>
          </a>
          <a href="#">
            <Link to="/delivery">
              <li>
                <img src="/images/trucking.svg" alt="Delivery van" />
                <p>Delivery</p>
              </li>
            </Link>
          </a>
          <a href="#">
            <Link to="/cleaning">
              <li>
                <img src="/images/sweep.svg" alt="Sweep" />
                <p>Cleaning</p>
              </li>
            </Link>
          </a>
          <a href="#">
            <Link to="/assembly">
              <li>
                <img src="/images/armchair.svg" alt="Armchair" />
                <p>Flat pack assembly</p>
              </li>
            </Link>
          </a>
          <a href="#">
            <Link to="/installation">
              <li>
                <img src="/images/sketch.svg" alt="Installation" />
                <p>Installation</p>
              </li>
            </Link>
          </a>
        </ul>
      </div>
    );
  }
}

export default Dropdown;

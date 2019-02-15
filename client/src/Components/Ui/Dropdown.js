import React, { Component } from "react";
import PropTypes from "prop-types";

class Dropdown extends Component {
  componentDidMount() {
    this.props.passRef(this.dropdownItem);
  }
  render() {
    return (
      <div
        className="dropdown"
        ref={element => (this.dropdownItem = element)}
        onMouseLeave={event => this.props.leaveDropDown(event)}
      >
        <div className="dropdown__text">
          <h2>What are you looking for?</h2>
          <p>Pick a task</p>
        </div>
        <ul className="dropdown__list">
          <a href="#">
            <li>
              <img src="images/wrench.svg" alt="Wrench" />
              <p>General handyman</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="images/washing-machine.svg" alt="Washing Machine" />
              <p>Laundry</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="images/trucking.svg" alt="Delivery van" />
              <p>Delivery</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="images/sweep.svg" alt="Sweep" />
              <p>Cleaning</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="images/armchair.svg" alt="Armchair" />
              <p>Flat pack assembly</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="images/sketch.svg" alt="Installation" />
              <p>Installation</p>
            </li>
          </a>
        </ul>
      </div>
    );
  }
}

export default Dropdown;

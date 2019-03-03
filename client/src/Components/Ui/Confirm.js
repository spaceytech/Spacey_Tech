import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class Confirm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="book__wrapper--confirm">
        <div className="book__wrapper--headline">
          <h1>{this.props.confirmTask.name}</h1>
          <h2>£72.20/hr</h2>
        </div>
        <div className="book__wrapper--payments">
          <p>You are charged only after your task is completed.</p>
          <div className="book__wrapper--payments__container">
            <label for="card">
              <p>Credit card</p>
              <input type="text" id="card" name="card" />
            </label>
            <div className="options">
              <label for="month">
                <p>Expiration</p>
              </label>
              <select id="month">
                <option value="">MM</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </div>
            <div className="options">
              <label for="year" />
              <select id="year">
                <option value="">YYYY</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </div>
            <label for="code">
              <p>CVV Code</p>
              <input type="text" id="code" name="code" />
            </label>
            <label for="postcode">
              <p>Postcode</p>
              <input type="text" id="postcode" name="postcode" />
            </label>
          </div>
        </div>
        <label for="phone" className="mobile">
          <p>Mobile Phone</p>
          <input type="text" id="phone" name="phone" />
        </label>
        <hr />
        <div className="book__wrapper--tasker">
          <div className="book__wrapper--times">
            <p>Date & Time</p>
            <h2>
              {moment(this.props.confirmTask.time).format("MMMM Do YYYY")}
            </h2>
          </div>
          <div className="book__wrapper--times">
            <p>Task location</p>
            <h2>{this.props.confirmTask.address}</h2>
          </div>
          <div className="book__wrapper--times">
            <p>Task options</p>
            <h2>{this.props.confirmTask.size}</h2>
          </div>
          <div className="book__wrapper--profile">
            <p>Tasker</p>
            <h2>sam A.</h2>
          </div>
        </div>
        <label>
          <p>Task description</p>
          <textarea cols="10" rows="5" charswidth="23" />
        </label>
        <div className="book__wrapper--next">
          <a href="#" className="button">
            <button className="is-disabled" disabled>
              Confirm and book
            </button>
          </a>
          <p>Edit task</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    confirmTask: state.confirmTask
  };
};

export default connect(mapStateToProps)(Confirm);

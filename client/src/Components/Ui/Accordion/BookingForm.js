import React, { Component } from "react";
import Booking from "../../Pages/Booking";
import AccordionWrapper from "./AccordionWrapper";
import { Redirect, withRouter } from "react-router-dom";

class BookingForm extends Component {
  nextSection = complete => {
    if (complete) {
      this.props.history.push("/dashboard/recommend");
    }
  };
  render() {
    return (
      <div className="book__wrapper--container">
        <h1>Describe your task: Handyman</h1>
        <p>
          We need these inputs to show only qualified and available Taskers for
          the job.
        </p>
        <AccordionWrapper
          nextSection={complete => this.nextSection(complete)}
        />
      </div>
    );
  }
}

export default withRouter(BookingForm);

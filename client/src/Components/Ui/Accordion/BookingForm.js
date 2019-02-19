import React, { Component } from "react";
import Booking from "../../Pages/Booking";
import AccordionWrapper from "./AccordionWrapper";

class BookingForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="book__wrapper--container">
        <h1>Describe your task: Handyman</h1>
        <p>
          We need these inputs to show only qualified and available Taskers for
          the job.
        </p>
        <AccordionWrapper />
      </div>
    );
  }
}

export default BookingForm;

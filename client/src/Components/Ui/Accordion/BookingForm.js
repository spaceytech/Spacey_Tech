import React, { Component } from "react";
import Booking from "../../Pages/Booking";
import AccordionWrapper from "./AccordionWrapper";
import { Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";

class BookingForm extends Component {
  nextSection = complete => {
    if (complete) {
      this.props.history.push("/dashboard/recommend");
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="book__wrapper--container">
        <h1>Describe your task: {this.props.tasksDetail.name}</h1>
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

const mapStateToProps = state => {
  return {
    tasksDetail: state.tasksDetail
  };
};

export default connect(mapStateToProps)(withRouter(BookingForm));

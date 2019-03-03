import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import { searchTaskers } from "../../actions/taskerActions";

class Taskers extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    const searchParams = {
      name: this.props.tasksDetail.name,
      address: this.props.tasksDetail.address,
      size: this.props.tasksDetail.size
    };
    this.props.dispatch(searchTaskers(searchParams));
  }

  onChange = date => this.setState({ date });

  nextSection = () => {
    this.props.history.push("/dashboard/confirm");
  };
  render() {
    return (
      <div className="book__wrapper--taskoptions">
        <h1 className="book__wrapper--taskoptions__heading">Pick a tasker</h1>
        <div className="book__wrapper--taskoptions__calendar">
          <h2>Task date</h2>
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
            className="calendar"
          />
        </div>
        {this.props.taskers.map(tasker => {
          return (
            <div className="book__wrapper--taskoptions__tasker">
              <div className="right">
                <img
                  src="/images/user.png"
                  alt="User image"
                  className="right__photo"
                />

                <Link to={`/tasker/${tasker.id}`}>
                  <p>View profile & reviews</p>
                </Link>
                <div className="button">
                  <button onClick={() => this.nextSection()}>
                    Select & continue
                  </button>
                </div>
                <span>
                  You can chat with your Tasker, adjust task details, or change
                  task time after booking.
                </span>
              </div>
              <div className="left">
                <div className="left__name">
                  <h1>{tasker.name}</h1>
                  <p>£{tasker.perHour}/hr</p>
                </div>
                <div className="left__quicky">
                  <i class="far fa-check-circle" />{" "}
                  <p>{tasker.completedTasks}% Minor Home Repairs Tasks</p>
                  <i class="far fa-star" />{" "}
                  <p>{tasker.reviews} Positive Reviews</p>
                  <i class="fas fa-shield-alt" />
                  <p>{tasker.reliable}% Reliable</p>
                </div>
                <hr />
                <div className="left__help">
                  <p>{tasker.description}</p>
                </div>
                <div className="left__review">
                  <img src="/images/user.png" alt="User image" />
                  <p>{tasker.review.text}</p>
                  <p>
                    {tasker.review.user} - {tasker.review.time}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasksDetail: state.tasksDetail,
    taskers: state.taskers
  };
};

export default connect(mapStateToProps)(withRouter(Taskers));

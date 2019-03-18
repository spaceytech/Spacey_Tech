import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import { searchTaskers, clearSearchTaskers } from "../../actions/taskerActions";
import { confirmTasks, clearConfirmTasks } from "../../actions/confirmActions";

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

  componentWillUnmount() {
    this.props.dispatch(clearSearchTaskers());
    this.props.dispatch(clearConfirmTasks());
  }

  onChange = date => this.setState({ date });

  nextSection = (e, taskerId) => {
    const confirmation = {
      name: this.props.tasksDetail.name,
      address: this.props.tasksDetail.address,
      size: this.props.tasksDetail.size,
      time: this.state.date,
      description: this.props.tasksDetail.description,
      tasker: taskerId
    };

    this.props.dispatch(confirmTasks(confirmation));
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
        {this.props.taskers.length > 0
          ? this.props.taskers.map(tasker => {
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
                      <button onClick={e => this.nextSection(e, tasker._id)}>
                        Select & continue
                      </button>
                    </div>
                    <span>
                      You can chat with your Tasker, adjust task details, or
                      change task time after booking.
                    </span>
                  </div>
                  <div className="left">
                    <div className="left__name">
                      <h1>
                        {tasker.first_name} {tasker.last_name}
                      </h1>
                      {tasker.skills.map((skill, i) => {
                        return skill.task ===
                          this.props.tasksDetail.name.toLowerCase() ? (
                          <p>£{skill.perHour}/hr</p>
                        ) : null;
                      })}
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
                    {tasker.comments.length > 0 ? (
                      <div className="left__review">
                        <img src="/images/user.png" alt="User image" />
                        <p>{tasker.review.text}</p>
                        <p>
                          {tasker.review.user} - {tasker.review.time}
                        </p>
                      </div>
                    ) : (
                      <p
                        style={{
                          fontSize: "1.6rem",
                          fontFamily: "Ubuntu, sans-serif"
                        }}
                      >
                        There are no reviews for {tasker.first_name}
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          : null}
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

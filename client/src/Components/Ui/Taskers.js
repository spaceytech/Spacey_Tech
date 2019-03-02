import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { withRouter } from "react-router-dom";

class Taskers extends Component {
  state = {
    date: new Date()
  };
  onChange = date => this.setState({ date });
  nextSection = () => {
    this.props.history.push("/dashboard/confirm");
  };
  render() {
    console.log(this.state.date);
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
        <div className="book__wrapper--taskoptions__tasker">
          <div className="right">
            <img
              src="/images/user.png"
              alt="User image"
              className="right__photo"
            />

            <p>View profile & reviews</p>
            <a href="#" className="button">
              <button onClick={() => this.nextSection()}>
                Select & continue
              </button>
            </a>
            <span>
              You can chat with your Tasker, adjust task details, or change task
              time after booking.
            </span>
          </div>
          <div className="left">
            <div className="left__name">
              <h1>Christin L.</h1>
              <p>£52.30/hr</p>
            </div>
            <div className="left__quicky">
              <i class="far fa-check-circle" />{" "}
              <p>8 Minor Home Repairs Tasks</p>
              <i class="far fa-star" /> <p>100% Positive Reviews</p>
              <i class="fas fa-shield-alt" />
              <p>91% Reliable</p>
            </div>
            <hr />
            <div className="left__help">
              <p>
                Painting and decorating homes and offices, ranging from small
                tasks such as putting up shelves and pictures to full office or
                home renovations. For large jobs cheaper rates can be expected
                for the assistants depending on work and numbers of hours
              </p>
            </div>
            <div className="left__review">
              <img src="/images/user.png" alt="User image" />
              <p>
                "Christian arrived on time with all the right tools. He got on
                with the job and everything was completed within one hour to a
                high standard. He asked me to check eveything was ok when he
                finished the task. I would definitely use him again. "
              </p>
              <p>Annika P. - 31 January 2019</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Taskers);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

class Categories extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(getTasks()).then(response => {
      let newState = response.payload.map(obj => {
        return {
          ...obj,
          open: false,
          qualified: false
        };
      });
      console.log(newState);
      this.setState({
        tasks: newState
      });
    });
  }

  toggleQualified = (e, index) => {
    console.log();
    const qualifiedTask = {
      ...this.state.tasks[index],
      qualified: !this.state.tasks[index].qualified
    };

    const newTasks = [
      ...this.state.tasks.slice(0, index),
      qualifiedTask,
      ...this.state.tasks.slice(index + 1, this.state.tasks.length)
    ];

    this.setState({
      tasks: newTasks
    });
  };

  toggleAccordion = (e, accordion) => {
    const tasks = this.state.tasks
      ? this.state.tasks.map(task => {
          if (task.name === accordion) {
            return {
              ...task,
              open: !task.open
            };
          } else {
            return { ...task };
          }
        })
      : null;
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="dashboard__container--categories">
        <p>
          Select your tasking categories and set your hourly rates. You can add
          or remove categories from your profile, or revise your rates, at any
          time.
        </p>
        <div className="button">
          <button>Continue</button>
        </div>
        {this.state.tasks
          ? this.state.tasks.map((task, i) => {
              return (
                <div className="dashboard__container--categories__tasks">
                  <div className="tasks">
                    <div
                      className="tasks__trigger"
                      onClick={e => this.toggleAccordion(e, task.name)}
                    >
                      <h1>{task.name}</h1>

                      <FontAwesomeIcon
                        className="icon"
                        icon={task.open ? faAngleUp : faAngleDown}
                      />
                    </div>
                    <div
                      className="tasks__accordion"
                      style={{ display: task.open ? "block" : "none" }}
                    >
                      <div className="tasks__accordion--scope">
                        <h2>Scope of Task</h2>
                        <hr />
                        <ul>
                          <li>
                            Bathrooms: Scrubbing sink, toilet, and
                            shower/bathtub; wiping mirrors.
                          </li>
                          <li>
                            Kitchen: Washing dishes; cleaning/wiping backsplash,
                            stove, counters, and appliances.
                          </li>
                          <li>
                            Floors: Hoovering, sweeping and/or mopping floors.
                          </li>
                          <li>
                            Dusting: Furniture, hard surfaces, and window sills.
                          </li>
                          <li>Tidying: Straighten and organise.</li>
                          <li>
                            Taking out garbage/recycling and replacing trash
                            bags.
                          </li>
                        </ul>
                        <label>
                          <input
                            type="checkbox"
                            name="qualified"
                            onChange={e => this.toggleQualified(e, i)}
                          />{" "}
                          I have the skills and qualifications to task in this
                          category.
                        </label>
                      </div>
                      <div className="tasks__accordion--rate">
                        <h2>Your Task Rate</h2>
                        <label>
                          £ <input type="text" name="rate" maxlength="3" />
                        </label>
                      </div>
                      <div className="tasks__accordion--pitch">
                        <h2>Your Quick Description</h2>
                        <hr />
                        <textarea rows="7" />
                      </div>
                      <div className="tasks__accordion--progression">
                        <div className="button">
                          <button>Save</button>
                        </div>
                        <div className="cancel">
                          <button>Cancel</button>
                        </div>
                        <div className="remove">
                          <button>
                            <FontAwesomeIcon icon={faTrash} className="icon" />Remove
                            skill
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default connect()(Categories);

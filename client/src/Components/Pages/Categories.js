import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faTrash,
  faStar
} from "@fortawesome/free-solid-svg-icons";

class Categories extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(getTasks()).then(response => {
      let newState = response.payload.map(obj => {
        let description = obj.description.split(".").map(desc => {
          if (desc.charAt(0) === ",") {
            return desc.substr(0, 0) + "" + desc.substr(1);
          } else {
            return desc;
          }
        });
        return {
          ...obj,
          description,
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

  saveTask = (e, accordion, property) => {
    console.log("Save task");
    if (this.state[accordion.toLowerCase()]["description"].length > 0) {
      this.setState({
        [accordion.toLowerCase()]: {
          ...this.state[accordion.toLowerCase()],
          save: true
        }
      });
    } else {
      this.setState({
        [accordion.toLowerCase()]: {
          ...this.state[accordion.toLowerCase()],
          error: {
            description: "This cannot be blank"
          }
        }
      });
    }
  };

  handleChange = (e, accordion) => {
    this.setState({
      [accordion.toLowerCase()]: {
        ...this.state[accordion.toLowerCase()],
        [e.target.name]: e.target.value,
        error: {}
      }
    });
  };

  addTaskCategory = (e, accordion) => {
    if (e.target.checked) {
      let newAccordion = {
        ...[this.state.accordion],
        save: false,
        description: "",
        perHour: ""
      };
      this.setState({
        [accordion.toLowerCase()]: newAccordion
      });
    }
  };

  toggleQualified = (e, index, accordion) => {
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

    this.addTaskCategory(e, accordion);

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
                      <span>
                        <FontAwesomeIcon icon={faStar} className="starIcon" />{" "}
                        Popular Tasks
                      </span>
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
                          {task.description.map(t => {
                            return <li>{t}</li>;
                          })}
                        </ul>
                        <label>
                          <input
                            type="checkbox"
                            name="qualified"
                            onChange={e =>
                              this.toggleQualified(e, i, task.name)
                            }
                          />{" "}
                          I have the skills and qualifications to task in this
                          category.
                        </label>
                      </div>
                      <div
                        className="tasks__accordion--rate"
                        style={{ opacity: task.qualified ? "1" : ".5" }}
                      >
                        <h2>Your Task Rate</h2>
                        <label>
                          £{" "}
                          <input
                            type="text"
                            name="perHour"
                            maxlength="3"
                            onChange={e => this.handleChange(e, task.name)}
                          />
                        </label>
                      </div>
                      <div
                        className="tasks__accordion--pitch"
                        style={{ opacity: task.qualified ? "1" : ".5" }}
                      >
                        <h2>Your Quick Description</h2>
                        <hr />
                        <textarea
                          rows="7"
                          name="description"
                          onChange={e => this.handleChange(e, task.name)}
                        />
                        {this.state[task.name.toLowerCase()] ? (
                          this.state[task.name.toLowerCase()]["error"] ? (
                            this.state[task.name.toLowerCase()]["error"][
                              "description"
                            ] ? (
                              <span
                                style={{ color: "red", fontSize: "1.5rem" }}
                              >
                                {
                                  this.state[task.name.toLowerCase()]["error"]
                                    .description
                                }
                              </span>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )
                        ) : null}
                      </div>
                      <div
                        className="tasks__accordion--progression"
                        style={{ opacity: task.qualified ? "1" : ".5" }}
                      >
                        <div className="button">
                          <button
                            onClick={e => this.saveTask(e, task.name, "save")}
                            disabled={task.qualified ? false : true}
                            style={{
                              cursor: task.qualified ? "pointer" : "not-allowed"
                            }}
                          >
                            Save
                          </button>
                        </div>
                        <div className="cancel">
                          <button
                            disabled={task.qualified ? true : false}
                            style={{
                              cursor: task.qualified ? "pointer" : "not-allowed"
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="remove">
                          <button
                            disabled={task.qualified ? true : false}
                            style={{
                              cursor: task.qualified ? "pointer" : "not-allowed"
                            }}
                          >
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

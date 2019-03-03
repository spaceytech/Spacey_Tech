import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

import { connect } from "react-redux";
import { sendTask } from "../../../actions/taskActions";

class AccordionWrapper extends Component {
  state = {
    accordions: [
      {
        trigger: "Task interest",
        open: true,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: "100",
        disabled: true
      },
      {
        trigger: "Street address",
        open: false,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: "100",
        disabled: true
      },
      {
        trigger: "Task option",
        open: false,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: "100",
        disabled: true
      },
      {
        trigger: "Tell us the details of your task",
        open: false,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: "100",
        disabled: true
      }
    ]
  };
  componentDidMount() {
    this.props.dispatch(sendTask());
  }

  openNext = (prev, next) => {
    const accordions = this.state.accordions;
    const previousAccordion = accordions[prev];
    const nextAccordion = accordions[next];

    previousAccordion.open = false;
    nextAccordion.open = true;

    previousAccordion.disabled = false;

    this.setState({
      accordions
    });
  };
  render() {
    return (
      <div className="accordion">
        <Collapsible
          trigger={this.state.accordions[0].trigger}
          open={this.state.accordions[0].open}
          easing={this.state.accordions[0].easing}
          transitionTime={this.state.accordions[0].transitionTime}
          triggerDisabled={this.state.accordions[0].disabled}
        >
          <h2>What do you want to do?</h2>
          <form>
            <label for="book">
              <input type="radio" name="book" value="book" id="book" />I am
              ready to book now
            </label>
            <label for="save">
              <input type="radio" name="book" value="save" id="save" />I want to
              save a task
            </label>
          </form>
          <div className="button">
            <button onClick={() => this.openNext(0, 1)}>Next</button>
          </div>
        </Collapsible>
        <Collapsible
          trigger={this.state.accordions[1].trigger}
          open={this.state.accordions[1].open}
          easing={this.state.accordions[1].easing}
          transitionTime={this.state.accordions[1].transitionTime}
          triggerDisabled={this.state.accordions[1].disabled}
        >
          <form>
            <input
              type="text"
              name="address"
              placeholder="Enter your street address"
              className="address"
            />
          </form>
          <div className="button">
            <button onClick={() => this.openNext(1, 2)}>Next</button>
          </div>
        </Collapsible>
        <Collapsible
          trigger={this.state.accordions[2].trigger}
          open={this.state.accordions[2].open}
          easing={this.state.accordions[2].easing}
          transitionTime={this.state.accordions[2].transitionTime}
          triggerDisabled={this.state.accordions[2].disabled}
        >
          <div className="task-size">
            <h2>Task Size</h2>
            <form>
              <label for="small">
                <input type="radio" name="size" value="small" id="small" />Small
                - Est. 1hr now
              </label>
              <label for="medium">
                <input type="radio" name="size" value="medium" id="medium" />Est.
                2-3hrs
              </label>
              <label for="large">
                <input type="radio" name="size" value="large" id="large" />Est.
                3-4hrs
              </label>
            </form>
          </div>
          <div className="button">
            <button onClick={() => this.openNext(2, 3)}>Continue</button>
          </div>
        </Collapsible>
        <Collapsible
          trigger={this.state.accordions[3].trigger}
          open={this.state.accordions[3].open}
          easing={this.state.accordions[3].easing}
          transitionTime={this.state.accordions[3].transitionTime}
          triggerDisabled={this.state.accordions[3].disabled}
        >
          <p>
            Start the conversation and tell your Tasker what you need done. This
            helps us show you only qualified and available Taskers for the job.
            Don't worry, you can edit this later.
          </p>
          <textarea placeholder="Hi! I am looking for assistance updating my 700sq ft apartment. I'm on the 3rd floor, although there are no lifts the flight of stairs are short. " />
          <div className="button">
            <button onClick={() => this.props.nextSection(true)}>
              See Taskers and Prices
            </button>
          </div>
        </Collapsible>
      </div>
    );
  }
}

export default connect()(AccordionWrapper);

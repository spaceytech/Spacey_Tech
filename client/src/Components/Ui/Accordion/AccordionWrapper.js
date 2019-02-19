import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

class AccordionWrapper extends Component {
  render() {
    return (
      <div className="accordion">
        <Collapsible
          trigger="Task interest"
          open="true"
          easing="cubic-bezier(0,.23,1,1.86)"
          transitionTime="100"
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
          <a href="#" className="button">
            <button>Next</button>
          </a>
        </Collapsible>
        <Collapsible
          trigger="Street address"
          easing="cubic-bezier(0,.23,1,1.86)"
          transitionTime="100"
        >
          <form>
            <input
              type="text"
              name="address"
              placeholder="Enter your street address"
              className="address"
            />
          </form>
          <a href="#" className="button">
            <button>Next</button>
          </a>
        </Collapsible>
        <Collapsible
          trigger="Task option"
          easing="cubic-bezier(0,.23,1,1.86)"
          transitionTime="100"
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
          <a href="#" className="button">
            <button>Continue</button>
          </a>
        </Collapsible>
        <Collapsible
          trigger="Tell us the details of your task"
          transitionTime="100"
          easing="cubic-bezier(0,.23,1,1.86)"
        >
          <p>
            Start the conversation and tell your Tasker what you need done. This
            helps us show you only qualified and available Taskers for the job.
            Don't worry, you can edit this later.
          </p>
          <textarea placeholder="Hi! I am looking for assistance updating my 700sq ft apartment. I'm on the 3rd floor, although there are no lifts the flight of stairs are short. " />
          <a href="#" className="button">
            <button>See Taskers and Prices</button>
          </a>
        </Collapsible>
      </div>
    );
  }
}

export default AccordionWrapper;

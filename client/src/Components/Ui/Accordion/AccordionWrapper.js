import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

class AccordionWrapper extends Component {
  render() {
    return (
      <div className="accordion">
        <Collapsible trigger="Task interest" open="true">
          <h2>What do you want to do?</h2>
          <form>
            <input type="radio" name="book" value="book" />I am ready to book
            now
            <input type="radio" name="book" value="save" />I want to save a task
          </form>
          <a href="#" className="button">
            <button>Next</button>
          </a>
        </Collapsible>
        <Collapsible trigger="Task location">
          <form>
            <input
              type="text"
              name="address"
              placeholder="Enter your street address"
            />
          </form>
          <a href="#" className="button">
            <button>Next</button>
          </a>
        </Collapsible>
        <Collapsible trigger="Task option">
          <div className="task_size">
            <h2>Task Size</h2>
            <form>
              <input type="radio" name="size" value="small" />Small - Est. 1hr
              now
              <input type="radio" name="size" value="medium" />Est. 2-3hrs
              <input type="radio" name="size" value="large" />Est. 3-4hrs
            </form>
          </div>
          <a href="#" className="button">
            <button>Next</button>
          </a>
        </Collapsible>
        <Collapsible trigger="Tell us the details of your task">
          <p>
            Start the conversation and tell your Tasker what you need done. This
            helps us show you only qualified and available Taskers for the job.
            Don't worry, you can edit this later.
          </p>
          <textarea />
          <a href="#" className="button">
            <button>See Taskers and Prices</button>
          </a>
        </Collapsible>
      </div>
    );
  }
}

export default AccordionWrapper;

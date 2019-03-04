import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";
import axios from "axios";

import { connect } from "react-redux";
import { sendTask } from "../../../actions/taskActions";

const convertString = string => {
  let newString = "";
  if (
    string.includes("<b>") &&
    string.includes("<br/>") &&
    string.includes("</b>")
  ) {
    let newString1 = string.replace(/(<|&lt;)b\s*(>|&gt;)/gm, " ");
    let newString2 = newString1.replace(/(<|&lt;)br\s*\/*(>|&gt;)/gm, " ");
    let newString3 = newString2.replace(/(<|&lt;)*\/*b\s*(>|&gt;)/gm, " ");

    return newString2;
  } else if (string.includes("<b>") && string.includes("</b>")) {
    let newString1 = string.replace(/(<|&lt;)b\s*(>|&gt;)/gm, " ");
    let newString2 = newString1.replace(/(<|&lt;)*\/*b\s*(>|&gt;)/gm, " ");
    return newString2;
  } else if (string.includes("</b>")) {
    newString = string.replace(/(<|&lt;)*\/b\s*(>|&gt;)/gm, " ");
  } else if (string.includes("<b>")) {
    newString = string.replace(/(<|&lt;)b\s*(>|&gt;)/gm, " ");
  } else if (string.includes("<br/>")) {
    newString = string.replace(/(<|&lt;)br\s*\/*(>|&gt;)/gm, " ");
  } else {
    return string;
  }

  return newString;
};

class AccordionWrapper extends Component {
  state = {
    suggestions: [],
    accordions: [
      {
        trigger: "Task interest",
        open: true,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: 100,
        disabled: true,
        book: ""
      },
      {
        trigger: "Street address",
        open: false,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: 100,
        disabled: true,
        address: ""
      },
      {
        trigger: "Task option",
        open: false,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: 100,
        disabled: true,
        size: ""
      },
      {
        trigger: "Tell us the details of your task",
        open: false,
        easing: "cubic-bezier(0,.23,1,1.86)",
        transitionTime: 100,
        disabled: true,
        description: ""
      }
    ]
  };

  openNext = (prev, next, property) => {
    const accordions = this.state.accordions;
    const previousAccordion = accordions[prev];
    const nextAccordion = accordions[next];

    if (previousAccordion[property].length > 0) {
      previousAccordion.open = false;
      nextAccordion.open = true;

      previousAccordion.disabled = false;
    }

    this.setState({
      accordions
    });
  };

  convertString = string => {
    return { string };
  };

  onChange = (e, index, property) => {
    const accordions = this.state.accordions;

    const accordion = accordions[index];
    accordion[property] = e.target.value;

    const newAccordions = [
      ...accordions.slice(0, index),
      accordion,
      ...accordions.slice(index + 1, accordions.length)
    ];

    if (property === "address") {
      axios
        .get(
          `https://places.cit.api.here.com/places/v1/autosuggest?app_id=qjsTChoHGZNFiedwp3lm&app_code=jX3eFSncs4SepI3N-fSvQA&at=55.3781,3.4360&q=${
            e.target.value
          }&result_types=address&&addressFilter=countryCode=GBR&tf=plain&pretty
        `
        )
        .then(response => {
          this.setState({
            suggestions: response.data.results
          });
        });
    }

    this.setState({
      accordions: newAccordions
    });
    console.log(this.state.suggestions);
  };

  nextSection = (e, index, property) => {
    const accordions = this.state.accordions;
    const accordion = accordions[index];

    let propArrays = ["book", "address", "size", "description"];
    let newAccordion = {};

    accordions.forEach(acc => {
      propArrays.forEach(prop => {
        if (acc.hasOwnProperty(prop)) {
          newAccordion[prop] = acc[prop];
        }
      });
    });

    if (accordion[property].length > 0) {
      this.props.dispatch(sendTask(newAccordion));
      this.props.nextSection(true);
    } else {
      this.props.nextSection(false);
    }
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
              <input
                type="radio"
                name="book"
                value="book"
                id="book"
                onChange={e => this.onChange(e, 0, "book")}
              />I am ready to book now
            </label>
            <label for="save">
              <input
                type="radio"
                name="book"
                value="save"
                id="save"
                onChange={e => this.onChange(e, 0, "book")}
              />I want to save a task
            </label>
          </form>
          <a href="#" className="button">
            <button onClick={() => this.openNext(0, 1, "book")}>Next</button>
          </a>
        </Collapsible>
        <Collapsible
          trigger={this.state.accordions[1].trigger}
          open={this.state.accordions[1].open}
          easing={this.state.accordions[1].easing}
          transitionTime={this.state.accordions[1].transitionTime}
          triggerDisabled={this.state.accordions[1].disabled}
        >
          <form autoComplete="off">
            <input
              type="text"
              name="address"
              placeholder="Enter your street address"
              className="address"
              onChange={e => this.onChange(e, 1, "address")}
            />
            <div id="dropdown">
              {this.state.suggestions.map(location => {
                return (
                  <p
                    style={{
                      borderTop: "1px solid var(--light-grey)",
                      padding: "2rem",
                      margin: 0
                    }}
                  >
                    {location.title}, {location.highlightedVicinity}
                  </p>
                );
              })}
            </div>
          </form>
          <a href="#" className="button">
            <button onClick={() => this.openNext(1, 2, "address")}>Next</button>
          </a>
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
                <input
                  type="radio"
                  name="size"
                  value="Small - Est. 1hr now"
                  id="small"
                  onChange={e => this.onChange(e, 2, "size")}
                />Small - Est. 1hr now
              </label>
              <label for="medium">
                <input
                  type="radio"
                  name="size"
                  value="Medium - Est. 2-3hrs"
                  id="medium"
                  onChange={e => this.onChange(e, 2, "size")}
                />Est. 2-3hrs
              </label>
              <label for="large">
                <input
                  type="radio"
                  name="size"
                  value="Large - Est. 3-4hrs"
                  id="large"
                  onChange={e => this.onChange(e, 2, "size")}
                />Est. 3-4hrs
              </label>
            </form>
          </div>
          <a href="#" className="button">
            <button onClick={() => this.openNext(2, 3, "size")}>
              Continue
            </button>
          </a>
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
          <textarea
            onChange={e => this.onChange(e, 3, "description")}
            placeholder="Hi! I am looking for assistance updating my 700sq ft apartment. I'm on the 3rd floor, although there are no lifts the flight of stairs are short. "
          />
          <a href="#" className="button">
            <button onClick={e => this.nextSection(e, 3, "description")}>
              See Taskers and Prices
            </button>
          </a>
        </Collapsible>
      </div>
    );
  }
}
export default connect()(AccordionWrapper);

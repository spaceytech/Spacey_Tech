import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { taskName } from "../../actions/taskActions";

class DetailProduct extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  taskName = title => {
    this.props.dispatch(taskName(this.props.title));
  };

  render() {
    return (
      <div className="details">
        <Layout>
          <header
            className="details__header"
            style={{
              backgroundImage: `${this.props.backgroundColor}, url(${
                this.props.backgroundImage
              })`
            }}
          >
            <h1>{this.props.title}</h1>
            <p>{this.props.tagline}</p>
            <Link to="/dashboard/form" className="button">
              <button onClick={() => this.taskName(this.props.title)}>
                Book now
              </button>
            </Link>
          </header>
        </Layout>
      </div>
    );
  }
}

export default connect()(DetailProduct);

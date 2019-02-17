import React, { Component } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

class DetailProduct extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
              <button>Book now</button>
            </Link>
          </header>
        </Layout>
      </div>
    );
  }
}

export default DetailProduct;

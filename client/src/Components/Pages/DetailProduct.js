import React, { Component } from "react";
import Layout from "../Layout/Layout";

class DetailProduct extends Component {
  render() {
    return (
      <div className="details">
        <Layout>
          <header
            className="details__header"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 191, 255,0.3),rgba(0, 191, 255,0.3)), url(${
                this.props.backgroundImage
              })`
            }}
          >
            <h1>{this.props.title}</h1>
            <p>{this.props.tagline}</p>
            <a href="#" className="button">
              <button>Book now</button>
            </a>
          </header>
        </Layout>
      </div>
    );
  }
}

export default DetailProduct;

import React, { Component } from "react";

//Components
import Layout from "../../Layout/Layout";
import Header from "./Header";
import Features from "./Features";
import Description from "./Description";
import Services from "./Services";

class Home extends Component {
  state = {
    ref: ""
  };

  defineRef = ref => {
    this.setState({
      ref
    });
  };
  render() {
    return (
      <div className="home">
        <Layout>
          <Header element={this.state.ref} />
          <Features />
          <Description passRef={this.defineRef} />
          <Services />
        </Layout>
      </div>
    );
  }
}

export default Home;

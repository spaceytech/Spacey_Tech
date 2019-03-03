import React, { Component } from "react";

//Components
import Layout from "../../Layout/Layout";
import Header from "./Header";
import Features from "./Features";
import Description from "./Description";
import Services from "./Services";

import { connect } from "react-redux";
import { clearTaskDetails } from "../../../actions/taskActions";

class Home extends Component {
  state = {
    ref: ""
  };

  defineRef = ref => {
    this.setState({
      ref
    });
  };

  componentDidMount() {
    this.props.dispatch(clearTaskDetails());
  }

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

export default connect()(Home);

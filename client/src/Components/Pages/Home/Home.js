import React from "react";

//Components
import Layout from "../../Layout/Layout";
import Header from "./Header";
import Features from "./Features";
import Description from "./Description";
import Services from "./Services";

const Home = props => {
  return (
    <div className="home">
      <Layout>
        <Header />
        <Features />
        <Description />
        <Services />
      </Layout>
    </div>
  );
};

export default Home;

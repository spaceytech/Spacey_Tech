import React from "react";

//Components
import Layout from "../../Layout/Layout";
import Header from "./Header";
import Promotion from "./Promotion";
import Description from "./Description";
import Services from "./Services";

const Home = props => {
  return (
    <div className="home">
      <Layout>
        <Header />
        <Promotion />
        <Description />
        <Services />
      </Layout>
    </div>
  );
};

export default Home;

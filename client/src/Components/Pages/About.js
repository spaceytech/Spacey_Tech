import React from "react";
import Layout from "../Layout/Layout";

const About = props => {
  return (
    <div className="about">
      <Layout>
        <header className="about__header">
          <h1>We are here to make people’s lives better</h1>
          <p>
            Creating a way to connect people ready to work, with people who need
            work done
          </p>
        </header>
        <section className="about__details">
          <div className="about__details--left">
            <p>“The only way to do great work is to love what you do ”</p>
          </div>
          <div className="about__details--right">
            <h2>Our vision</h2>
            <p>
              Spacey is a trusted community platform that connects people who
              need to outsource tasks and find local services, with people who
              are looking to earn money and ready to work.
            </p>{" "}
            <p>
              From simple to complicated tasks, Spacey can help you complete
              your home cleaning, handyman jobs, assembly, delivery and
              installation
            </p>{" "}
            <p>
              {" "}
              Go online or download the app and Spacey will take you from
              'things to do' to 'everything's done'.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default About;

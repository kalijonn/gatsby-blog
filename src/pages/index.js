import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const LandingPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorials.</p>
      <StaticImage src="../images/dog.jpeg" alt="dog" />
    </Layout>
  );
};

export default LandingPage;

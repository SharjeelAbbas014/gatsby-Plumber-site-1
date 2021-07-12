import React from "react";
import Layout from "../Component/layout";
import * as IndexStyle from "../styles/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Services from "../Component/Services";
import Reviews from "../Component/reviews";
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <StaticImage src="../images/hero.jpg" className={IndexStyle.backImg} />
        <div className={IndexStyle.home}>
          <div className={IndexStyle.left}>
            <h2>On Time Plumbing</h2>
            <h4>Proudly serving Mountain view and the Bay Area</h4>
            <p>
              Our expert Maintenance team are available 365 days a year to
              attend to your problems. promptly and competently!
            </p>
          </div>
          <div className={IndexStyle.right}>
            <StaticImage src="../images/man.png" className={IndexStyle.man} />
          </div>
        </div>
      </div>
      <Services />
      <Reviews />
    </Layout>
  );
};

export default IndexPage;

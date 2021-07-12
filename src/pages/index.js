import React from "react";
import Layout from "../Component/layout";
import * as IndexStyle from "../styles/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Services from "../Component/Services";
import ImageSlider from "../Component/imageSlider";

import Reviews from "../Component/reviews";
import Promotion from "../Component/promotion";
import Contact from "../Component/Contact";
import Footer from "../Component/footer";
import AboutUs from "../Component/aboutus";
const IndexPage = () => {
  return (
    <Layout>
      <div id="home">
        <StaticImage
          src="../images/hero.jpg"
          className={IndexStyle.backImg}
          alt="hello"
        />
        <div className={IndexStyle.home}>
          <div className={IndexStyle.left}>
            <h2>On Time Plumbing</h2>
            <h4>Proudly serving Mountain view and the Bay Area</h4>
            <p>
              Our expert Maintenance team are available 365 days a year to
              attend to your problems. promptly and competently!
            </p>
            <a href="tel:+6507930084">Call Now</a>
          </div>
          <div className={IndexStyle.right}>
            <StaticImage
              src="../images/man.png"
              className={IndexStyle.man}
              alt="hello"
            />
          </div>
        </div>
      </div>
      <div className={IndexStyle.disc}>
        <p>
          As an essential business, we are open on regular hours during this
          pandemic. And because you are our priority we are taking every
          possible precaution and recommendation according to the CDC.
        </p>
      </div>
      <AboutUs />
      <Services />
      <Reviews />
      <ImageSlider />
      <Promotion />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

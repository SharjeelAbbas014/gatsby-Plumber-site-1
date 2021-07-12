import React from "react";
import * as about from "./about.module.css";
export default function AboutUs() {
  return (
    <div id="aboutus">
      <h2 className={about.head}>About Our Company</h2>
      <div className={about.parent}>
        <p>
          Our company is a family business, we base our advice with the most
          highly-trained industry-certified master plumbers with 10 years of
          experience working for both commercial and residential clients We are
          a local operation that is appropriate bonded and insured company. Our
          goal is to serve you with reliable and professional service, and
          letting us to achieve our commitment with satisfied customers.
        </p>
      </div>
    </div>
  );
}

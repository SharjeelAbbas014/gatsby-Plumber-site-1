import React from "react";

import * as prom from "./prom.module.css";
export default function Contact() {
  return (
    <div id="contact">
      <h2 className={prom.head}>Contact Us</h2>
      <div className={prom.contact}>
        <div>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" />
          <button>Send Message</button>
        </div>
        <div>
          <p>P.O.BOX 391539 MOUNTAIN VIEW, CA 94039</p>
          <p>
            <a href="mailto:ontimeplumbing84@gmail.com">
              ontimeplumbing84@gmail.com{" "}
            </a>
          </p>
          <p>Tel: 650-793-0084</p>
        </div>
      </div>
    </div>
  );
}

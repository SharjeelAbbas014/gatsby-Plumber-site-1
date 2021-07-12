import React from "react";
import { Link } from "gatsby";
import * as containerStyles from "./Navbar.module.css";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function Navbar({ fixed }) {
  return (
    <div className={containerStyles.navbar}>
      <div className={containerStyles.navbar_child}>
        <div>
          <a onClick={() => scrollTo("#aboutus")}>About Us</a>
        </div>
        <div>
          <a onClick={() => scrollTo("#services")}>Services</a>
        </div>
        <div>
          <a onClick={() => scrollTo("#contact")}>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

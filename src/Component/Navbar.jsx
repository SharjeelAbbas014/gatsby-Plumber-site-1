import React from "react";
import { Link } from "gatsby";
import * as containerStyles from "./Navbar.module.css";
export default function Navbar({ fixed }) {
  return (
    <div className={containerStyles.navbar}>
      <div className={containerStyles.navbar_child}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <Link to="/services">Services</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

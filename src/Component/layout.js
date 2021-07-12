import React from "react";
import Navbar from "./Navbar";
import "../styles/main.css";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

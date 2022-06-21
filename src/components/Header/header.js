import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";

const header = () => {
  return (
    <header className="header">
      <div className="main-navigation">
        <div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
          <div className="container">
            <Logo />
            <Navbar />
          </div>
        </div>
        <div className="bsnav-mobile">
          <div className="bsnav-mobile-overlay" />
          <div className="navbar" />
        </div>
      </div>
    </header>
  );
};

export default header;

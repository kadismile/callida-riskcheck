import React from "react";

const navbar = () => {
  return (
    <>
      <button className="navbar-toggler toggler-spring">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-sm-end">
        <ul className="navbar-nav navbar-mobile ml-auto">
          <li className="nav-item dropdown fadeup">
            <a className="nav-link" href="#/">
              Home <i className="caret ti-plus" />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index-2.html">
                  Home version 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index-3.html">
                  Home version 2
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              About
            </a>
          </li>
          <li className="nav-item dropdown fadeup">
            <a className="nav-link" href="#/">
              Pages <i className="caret ti-plus" />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="service.html">
                  {" "}
                  Service{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service-single.html">
                  Service Single
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="work.html">
                  Our Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="work-single.html">
                  Project Single
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team.html">
                  {" "}
                  Our Team{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="404.html">
                  {" "}
                  404{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown fadeup">
            <a className="nav-link" href="#/">
              Blog <i className="caret ti-plus" />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="blog.html">
                  {" "}
                  Blog{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="single.html">
                  Blog Details
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
        <div className="header-serarch-btn">
          <a href="contact.html" className="btn-2">
            Contact Us
            <i className="icofont-long-arrow-right" />
          </a>
        </div>
      </div>
    </>
  );
};

export default navbar;

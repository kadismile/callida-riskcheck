import React from "react";
import Contact from "./contact";
import Links from "./links";
import Gallery from "./gallery";
import Socials from "./socials";

const footer = () => {
  return (
    <footer>
      <div className="footer-shape">
        <img src="assets/img/footer/footer-bg.png" alt="thumb" />
      </div>
      <div className="footer-widget">
        <div className="container">
          <div className="footer-widget-wrapper de-pb">
            <div className="row g-5">
              <div className="col-xl-5 col-sm-6 col-lg-6">
                <div className="footer-widget-box ab-us">
                  <div>
                    <img src="assets/img/logo/logo.png" alt="thumb" />
                  </div>
                  <p className="mb-50">
                    This is Photoshop's version of LoreiIpsum. Aenean
                    sollicitudin,
                  </p>
                  <Contact />
                </div>
              </div>
              <Links />
              <Gallery />
            </div>
          </div>
          <div className="copyright">
            <p>© 2020 All Right Reserved, Ailng</p>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;

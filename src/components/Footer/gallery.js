import React from "react";

const gallery = () => {
  return (
    <div className="col-xl-3 col-sm-6 col-lg-6">
      <div className="footer-widget-box footer-gallery">
        <h4 className="footer-widget-title">Instagram</h4>
        <div className="foter-img grid-2">
          <a href="#/">
            <img src="assets/img/singlepost/ins-1.jpg" alt="thumb" />
          </a>
          <a href="#/">
            <img src="assets/img/singlepost/ins-2.jpg" alt="thumb" />
          </a>
          <a href="#/">
            <img src="assets/img/singlepost/ins-3.jpg" alt="thumb" />
          </a>
          <a href="#/">
            <img src="assets/img/singlepost/ins-1.jpg" alt="thumb" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default gallery;

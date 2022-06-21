import React from "react";

const whatwedo = () => {
  return (
    <div className="what-area de-pb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="site-title text-center">
              <span className="about-sub-title">What We Do</span>
              <h2
                data-splitting
                className="about-title mb-0 wow"
                data-wow-duration=".1s"
                data-wow-delay=".2s"
              >
                We Providing Some Special Services
                <br />
                To our Clients.
              </h2>
            </div>
          </div>
        </div>
        <div className="what-wpr grid-3">
          <div
            className="what-box wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="what-icon">
              <img src="assets/img/icons/3.png" alt="thumb" />
            </div>
            <div className="what-info">
              <h5>Business Analysis</h5>
              <p>
                According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite.
              </p>
              <a href="service-single.html" className="what-btn">
                Explore Service
              </a>
            </div>
          </div>
          <div
            className="what-box wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="what-icon">
              <img src="assets/img/icons/4.png" alt="thumb" />
            </div>
            <div className="what-info">
              <h5>Financial Planning</h5>
              <p>
                According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite.
              </p>
              <a href="service-single.html" className="what-btn">
                Explore Service
              </a>
            </div>
          </div>
          <div
            className="what-box wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".4s"
          >
            <div className="what-icon">
              <img src="assets/img/icons/5.png" alt="thumb" />
            </div>
            <div className="what-info">
              <h5>Digital Marketing</h5>
              <p>
                According to lorem ipsum dolo siti ameat dui too consecteture
                consecteture elite.
              </p>
              <a href="service-single.html" className="what-btn">
                Explore Service
              </a>
            </div>
          </div>
        </div>
        <div className="what-footer mt-60">
          <h5
            className="mb-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            If you have any project or task for us Please
            <a href="contact.html">Contact Us</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default whatwedo;

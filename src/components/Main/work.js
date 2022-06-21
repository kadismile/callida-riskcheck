import React from "react";

const work = () => {
  return (
    <div className="work-area de-pb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="site-title text-center">
              <span className="about-sub-title">Protfolio</span>
              <h2
                data-splitting
                className="about-title mb-0 wow"
                data-wow-duration=".1s"
                data-wow-delay=".6s"
              >
                Recently done case study by our
                <br />
                inteligents team
              </h2>
            </div>
          </div>
        </div>
        <div className="work-wpr magnific-mix-gallery">
          <div className="work-grid-1 mb-30">
            <div className="work-pic work-pic-1">
              <img src="assets/img/work/1.png" alt="thumb" />
              <div className="work-overlay">
                <a href="assets/img/work/1.png" className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-2">
              <img src="assets/img/work/2.png" alt="thumb" />
              <div className="work-overlay">
                <a href="assets/img/work/2.png" className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-3">
              <img src="assets/img/work/3.png" alt="thumb" />
              <div className="work-overlay">
                <a href="assets/img/work/3.png" className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
          </div>
          <div className="work-grid-2 grid-3">
            <div className="work-pic work-pic-4">
              <img src="assets/img/work/4.png" alt="thumb" />
              <div className="work-overlay">
                <a href="assets/img/work/4.png" className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-5">
              <img src="assets/img/work/5.png" alt="thumb" />
              <div className="work-overlay">
                <a href="assets/img/work/5.png" className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
            <div className="work-pic work-pic-6">
              <img src="assets/img/work/6.png" alt="thumb" />
              <div className="work-overlay">
                <a href="assets/img/work/6.png" className="item popup-link">
                  <i className="ti ti-eye" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work-btn text-center mt-70">
          <a href="work.html" className="theme-btn">
            Explore More <i className="icofont-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default work;

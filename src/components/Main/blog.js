import React from "react";

const blog = () => {
  return (
    <div className="blog-area de-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div
              className="site-title text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <span className="about-sub-title">Blog</span>
              <h2 className="about-title mb-0">
                See our Latest &amp; Popular Tips &amp; Tricks
                <br />
                from our Experts
              </h2>
            </div>
          </div>
        </div>
        <div
          className="blog-wpr grid-3 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s"
        >
          <div className="blog-box">
            <div className="blog-pic">
              <img src="assets/img/blog/1.jpg" alt="thumb" />
            </div>
            <div className="blog-info">
              <ul className="blog-meta">
                <li>
                  <i className="icofont-user-alt-4" /> Philip Hobs
                </li>
                <li>
                  <i className="icofont-clock-time" /> 02feb,2021
                </li>
              </ul>
              <a href="single.html">
                <h5 className="blog-title">
                  How to make money online easily &amp; quickly
                </h5>
              </a>
              <a href="single.html" className="btn-4 hv">
                <i className="icofont-arrow-right" />
              </a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-pic">
              <img src="assets/img/blog/2.jpg" alt="thumb" />
            </div>
            <div className="blog-info">
              <ul className="blog-meta">
                <li>
                  <i className="icofont-user-alt-4" /> Philip Hobs
                </li>
                <li>
                  <i className="icofont-clock-time" /> 02feb,2021
                </li>
              </ul>
              <a href="single.html">
                <h5 className="blog-title">
                  How to growing your business tips &amp; tricks
                </h5>
              </a>
              <a href="single.html" className="btn-4 hv">
                <i className="icofont-arrow-right" />
              </a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-pic">
              <img src="assets/img/blog/3.jpg" alt="thumb" />
            </div>
            <div className="blog-info">
              <ul className="blog-meta">
                <li>
                  <i className="icofont-user-alt-4" /> Philip Hobs
                </li>
                <li>
                  <i className="icofont-clock-time" /> 02feb,2021
                </li>
              </ul>
              <a href="single.html">
                <h5 className="blog-title">
                  Most profitable business case studies tricks
                </h5>
              </a>
              <a href="single.html" className="btn-4 hv">
                <i className="icofont-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;

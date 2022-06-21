import React from "react";

const intro = () => {
  return (
    <div id="home" className="hero-section">
      <div className="hero-sliderr">
        {/* owl Slider Begin */}
        <div
          className="hero-single"
          style={{ backgroundImage: "url(assets/img/header/hdr-1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="hero-content text-center">
                  <span
                    className="top-title wow fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Business Consulting Agency
                  </span>
                  <h2
                    data-splitting
                    className="home-title wow"
                    data-wow-duration=".1s"
                    data-wow-delay=".2s"
                  >
                    Creative &amp; Inteligents People help <br />
                    Growing Business.
                  </h2>
                  <p>
                    Lorem ipsum dolor consecteture elite we’re a creative
                    digitalyour business growing we’re a creative digitalyour
                    business growing up.
                  </p>
                  <div
                    className="hro-btn wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <a href="service.html" className="theme-btn">
                      Explore More
                      <i className="icofont-long-arrow-right" />
                    </a>
                    <div className="how-we-work">
                      <a
                        href="https://www.youtube.com/watch?v=ku6dEtynrRI"
                        className="item popup-youtube"
                      >
                        <i className="fas fa-play" />
                        <span className="how-txt">How we work</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single Slider End */}
      </div>
    </div>
  );
};

export default intro;

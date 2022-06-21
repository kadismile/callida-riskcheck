import React from "react";

const about = () => {
  return (
    <div className="about-area de-padding">
      <div className="about-wpr grid-2">
        <div className="about-left">
          <div
            className="about-img wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".4s"
          >
            <img src="assets/img/about/about-1.png" alt="thumb" />
          </div>
        </div>
        <div className="about-right about-padding-right">
          <span className="about-sub-title">About Agency</span>
          <h2
            data-splitting
            className="about-title wow"
            data-wow-duration=".1s"
            data-wow-delay=".2s"
          >
            A helping hand agency <br />
            for Business
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            seieiusmoed dui too consecteture elite more.According to ipsum dolor
            seat ameat consecteture elite.
          </p>
          <div className="about-fact grid-3">
            <div
              className="fun-fact wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="fun-icon">
                <img src="assets/img/icons/1.png" alt="thumb" />
                <p className="timer" data-to={2382} data-speed={3000}>
                  2382
                </p>
              </div>
              <div className="fun-desc">
                <span className="medium">Project Completed</span>
              </div>
            </div>
            <div
              className="fun-fact wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="fun-icon">
                <img src="assets/img/icons/2.png" alt="thumb" />
                <p className="timer" data-to={1382} data-speed={3000}>
                  1382
                </p>
              </div>
              <div className="fun-desc">
                <span className="medium">Team Members</span>
              </div>
            </div>
            <div
              className="fun-fact wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <div className="fun-icon">
                <img src="assets/img/icons/feedback.png" alt="thumb" />
                <p className="timer" data-to={2382} data-speed={3000}>
                  2382
                </p>
              </div>
              <div className="fun-desc">
                <span className="medium">Happy Clients</span>
              </div>
            </div>
          </div>
          <div
            className="about-btn mt-60 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <a href="work.html" className="theme-btn">
              Explore More <i className="icofont-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

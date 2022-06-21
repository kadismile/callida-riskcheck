import React from "react";
import Intro from "../components/Main/intro";
import Features from "../components/Main/features";
import About from "../components/Main/about";
import Whatwedo from "../components/Main/whatwedo";
import Faq from "../components/Main/faq";
import Work from "../components/Main/work";
import Subscribe from "../components/Main/subscribe";
import Blog from "../components/Main/blog";
import Review from "../components/Main/review";

const Home = () => {
  return (
    <main className="main">
      <Intro />
      <Features />
      <About />
      <Whatwedo />
      <Faq />
      <Work />
      <Subscribe />
      <Blog />
      <Review />
    </main>
  );
};

export default Home;

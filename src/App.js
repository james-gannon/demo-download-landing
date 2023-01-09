import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as THREE from "three";

import {
  Download,
  Features,
  SectionWrapper,
  SectionWrapperVideo,
  Footer,
  Header,
} from "./components";
import assets from "./assets/assets";
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});

const App = () => {
  return (
    <Router>
      <div className="position: relative">
        {/*<nav className="flex items-center justify-between flex-wrap bg-black p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/" className="font-semibold text-xl tracking-tight">
              CashQuest
            </Link>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                to="/Features"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                Features
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                About
              </Link>
              <Link
                to="/works"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
              >
                How it Works
              </Link>
            </div>
            <div>
              <Link
                to="/download"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </Link>
            </div>
          </div>
  </nav>*/}
        <Header />
        <SectionWrapper
          title="Company Slogan"
          id="home"
          description="A catchy description of your startup or business and the products you offer goes here."
          showBtn
          header
          mockupImg={assets.homeHero}
          banner="banner"
          className="position: sticky"
        />
        <SectionWrapper
          title="About"
          id="about"
          description="Speak about your product. What is its value proposition, and what problem does it solve? A few sentences should do.
        "
          mockupImg={assets.homeCards}
          reverse
        />
        <Features id="features" />
        <SectionWrapper
          title="How it Works"
          id="product"
          description="In the simplest terms, describe your product's basic functionality. How does one use it?
        "
          mockupImg={assets.feature}
          reverse
        />
        <SectionWrapperVideo
          title="Video Demo"
          id="demo"
          description="A demonstration of your product or video containing cutomer reviews (this video is currently just a placeholder)."
          banner="banner02"
        />
        <Download id="download" />
        <Footer id="contact" />
        <div className="px-4 py-2 justify-center items-center bg-black flex-col text-center">
          <p className="text-xs text-gray-400 py-2">
            Brought to you by {""}
            <span className="font-bold text-gray-100">Company Name</span>,
            Copyright &copy; 2022
          </p>
        </div>
      </div>
    </Router>
  );
};

export default App;

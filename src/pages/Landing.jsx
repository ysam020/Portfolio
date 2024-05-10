import React from "react";
import "../styles/landing.css";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-blur">
        <Banner />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;

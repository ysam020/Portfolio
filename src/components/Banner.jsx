import React from "react";
import cv from "../assets/resume/Resume.pdf";
import { Container } from "react-bootstrap";
import "../styles/banner.css";

function Banner() {
  const download = () => {
    let downloadBtn = document.getElementById("downloadCV");
    let aTag = document.createElement("a");
    aTag.href = cv;
    aTag.download = "Sameer CV";
    aTag.click();
    downloadBtn.appendChild(aTag);
    aTag.remove();
  };

  return (
    <Container fluid className="banner" id="banner">
      <div className="banner-inner">
        <h1>
          Hello! I'm
          <br /> Sameer Yadav
        </h1>
        <p>
          I've embarked on a journey as a Frontend Web Developer, mastering
          skills in HTML, CSS, JavaScript, React JS, and WordPress. My role as
          both a designer and developer has cultivated a deep passion for web
          design. I specialize in creating websites that are not only
          aesthetically pleasing but also highly functional, with a focus on
          simplicity and user-friendliness.
        </p>
        <button id="downloadCV" onClick={download} aria-label="download-cv">
          Get Resume
        </button>
      </div>
    </Container>
  );
}

export default Banner;

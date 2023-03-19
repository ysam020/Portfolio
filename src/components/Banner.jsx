import React from "react";
import cv from "../assets/resume/Sameer CV.pdf";
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
          Since beginning my journey as a front-end web developer nearly 3 years
          ago, I've learnt HTML, CSS, JS, React JS and Wordpress.I'm a designer
          & developer with a passion for web design. I enjoy developing simple,
          clean and slick websites that provide real value to the end user.
        </p>
        <button id="downloadCV" onClick={download} aria-label="download-cv">
          Get Resume
        </button>
      </div>
    </Container>
  );
}

export default Banner;

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
          I've embarked on a journey as a Full-Stack Web Developer, mastering
          skills in HTML, CSS, JavaScript, React JS, and Node.js. My role as
          both a designer and developer has cultivated a deep passion for web
          design and development. I specialize in creating websites that are not
          only aesthetically pleasing but also highly functional. Through my
          professional experience, I have also gained proficiency in deploying
          applications on AWS EC2, utilizing S3 for storage, and implementing
          advanced Node.js techniques, including clustering and Redis caching.
        </p>
        <button id="downloadCV" onClick={download} aria-label="download-cv">
          Get Resume
        </button>
      </div>
    </Container>
  );
}

export default Banner;

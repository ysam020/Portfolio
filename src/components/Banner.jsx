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
          MERN Stack Developer with 1.9 years of experience in building secure
          and scalable web applications. Proficient in MongoDB, ExpressJS,
          ReactJS, NodeJS, and AWS services. Expertise in data security
          (AES-256, JWT, SSL, HSTS, 2FA), implementing WebSockets for real-time
          communication, Protocol Buffers for efficient data serialization, and
          Redis caching with MongoDB ChangeStreams for real-time updates.
          Skilled in CI/CD using AWS CodePipeline, CodeBuild, and CodeDeploy,
          with experience in autoscaling, load balancing, and offline
          capabilities using Workbox.
        </p>
        <button id="downloadCV" onClick={download} aria-label="download-cv">
          Get Resume
        </button>
      </div>
    </Container>
  );
}

export default Banner;

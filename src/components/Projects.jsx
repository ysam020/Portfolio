import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/projects.css";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import ProjectsCardSvg from "./ProjectsCardSvg";
import ImageCard from "./ImageCard";
import { projectData } from "../assets/data/ProjectData";
import { otherProjectsData } from "../assets/data/OtherProjectsData";

function Projects() {
  const [imgClass, setImgClass] = useState("");

  useEffect(() => {
    const frameTwo = document.getElementById("frame-2");
    const frameThree = document.getElementById("frame-3");

    if (frameTwo && frameThree) {
      document.addEventListener("scroll", function () {
        if (frameTwo.getBoundingClientRect().top < 650) {
          setImgClass("projects-frame-2-img");
        } else {
          setImgClass("projects-frame-1-img");
        }
        if (frameThree.getBoundingClientRect().top < 650) {
          setImgClass("projects-frame-3-img");
        }
      });
    }
  }, []);

  return (
    <>
      <Container fluid className="projects" id="projects">
        <Row>
          <Col xs={12} md={6} className="projects-col-1">
            {projectData.map((project) => {
              return (
                <div
                  key={project.id}
                  className="projects-frame"
                  id={`frame-${project.id}`}
                >
                  <h2>Project {project.id}</h2>
                  <h4>
                    {project.title}
                    <br />
                  </h4>
                  <p>{project.description}</p>
                  <div className="projects-card-container">
                    <div className="projects-card">
                      <div>
                        <h3>{project.cardTitle}</h3>
                        <p>{project.cardInfo}</p>
                      </div>
                      <ProjectsCardSvg>
                        <GoogleIcon
                          viewBox="-8 -8 50 50"
                          sx={{
                            color: "#1f1f1f",
                            "&:hover": { color: "#fff" },
                          }}
                        />
                      </ProjectsCardSvg>
                    </div>

                    <Link to={project.repo} target="_blank">
                      <div className="projects-card">
                        <div>
                          <h3>See Repository</h3>
                          <p>Source code on Github</p>
                        </div>
                        <ProjectsCardSvg>
                          <GitHubIcon viewBox="-8 -8 50 50" />
                        </ProjectsCardSvg>
                      </div>
                    </Link>
                  </div>
                  <Link to={project.link} target={"_blank"}>
                    <div className="project-live-link">See Live Project</div>
                  </Link>
                  <div className="projects-divider">
                    <Divider />
                  </div>
                </div>
              );
            })}
          </Col>
          <Col className="projects-col-2">
            <div className={`projects-frame-img  ${imgClass}`}></div>
          </Col>
        </Row>

        <Row className="projects-section-2">
          <h2>Other noteworthy projects</h2>
          <Row>
            {otherProjectsData.map((project) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  key={project.id}
                  className={`card other-projects-card-${project.id}`}
                >
                  <Link to={project.url} target="_blank">
                    <ImageCard
                      id={project.id}
                      title={project.title}
                      text={project.text}
                    />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Projects;

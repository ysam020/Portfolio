import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/education.css";
import { educationData } from "../assets/data/EducationData";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import TimelineComponent from "./Timeline";
import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";

function Education() {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <Container fluid className="education" id="education">
      <Row>
        <Col xs={12} lg={4} className="education-col-1">
          <div className="photo-card">
            <img src={require("../assets/images/profile.webp")} alt="" />
            <p>
              <a href="mailto:sameery.020@gmail.com">sameery.020@gmail.com</a>
              <br />
              <a href="tel:+918377971782">+91 8377971782</a>.
              <br />
              New Delhi, India
            </p>
            <div className="social-links">
              <Link to="https://github.com/ysam020" target="_blank">
                <Tooltip title="Github">
                  <IconButton aria-label="github">
                    <GitHubIcon
                      sx={{
                        width: "30px !important",
                        height: "30px !important",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link to="https://www.linkedin.com/in/ysam090/" target="_blank">
                <Tooltip title="Linkedin">
                  <IconButton aria-label="linkedin">
                    <LinkedInIcon
                      sx={{
                        width: "30px !important",
                        height: "30px !important",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
          </div>
        </Col>
        <Col className="education-col-2">
          <h2>Education & Certifications</h2>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            {educationData.map((val) => {
              const { id, year, course, institute, score } = val;

              return (
                <div data-aos="fade-up-left" key={id}>
                  <TimelineComponent
                    id={id}
                    year={year}
                    course={course}
                    score={score}
                    institute={institute}
                  />
                </div>
              );
            })}
          </Timeline>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;

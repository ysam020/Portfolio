import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/education.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Typography from "@mui/material/Typography";
import { educationData } from "../assets/data/EducationData";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: { width: "30px !important", height: "30px !important" },
}));

function Education() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <Container fluid className="education" id="education">
      <Row>
        <Col xs={4} className="education-col-1">
          <div className="photo-card">
            <img src={require("../assets/images/profile.jpg")} alt="" />
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
                  <IconButton>
                    <GitHubIcon className={classes.icon} />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link to="https://www.linkedin.com/in/ysam090/" target="_blank">
                <Tooltip title="Linkedin">
                  <IconButton>
                    <LinkedInIcon className={classes.icon} />
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
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      {year}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot
                        sx={{
                          backgroundColor: "#43A9DE",
                        }}
                      >
                        {id <= 3 ? <SchoolIcon /> : <CardMembershipIcon />}
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        margin: "30px 0 30px 20px",
                      }}
                    >
                      <Typography variant="h6" component="span">
                        {course} {score ? `- ${score}` : ""}
                      </Typography>
                      <Typography>{institute}</Typography>
                    </TimelineContent>
                  </TimelineItem>
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Tooltip } from "@mui/material";
import ContactForm from "../forms/ContactForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: { width: "40px !important", height: "40px !important" },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Container className="footer" id="contact">
      <svg
        className="footer-divider"
        _ngcontent-okh-c39=""
        aria-hidden="true"
        width="100%"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          _ngcontent-okh-c39=""
          id="a"
          width="91"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <g _ngcontent-okh-c39="" clipPath="url(#clip0_2426_11367)">
            <path
              _ngcontent-okh-c39=""
              d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
              stroke="#E1E3E1"
              strokeLinecap="square"
            ></path>
          </g>
        </pattern>
        <rect
          _ngcontent-okh-c39=""
          width="100%"
          height="100%"
          fill="url(#a)"
        ></rect>
      </svg>

      <Row>
        <Col xl={6} className="footer-column footer-column-1">
          <h2>Have something to say?</h2>
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
        </Col>

        <Col xl={6} className="footer-column footer-column-2">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

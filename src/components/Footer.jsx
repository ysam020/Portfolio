import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import { Tooltip } from "@material-ui/core";
import { socialData } from "../assets/data/SocialData";
import "../styles/footer.css";

function Footer() {
  return (
    <Container fluid className="footer" id="contact">
      <Row className="footer-row-1">
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

        <Col xs={12} xl={5} className="footer-column footer-column-1">
          <h2>Have something to say?</h2>
        </Col>

        <Col xs={12} xl={7} className="footer-column footer-column-2">
          <ContactForm />
        </Col>
      </Row>

      <Row className="footer-row-2">
        <div className="social-links">
          {socialData.map((item) => {
            return (
              <Link to={item.url} target="_blank" key={item.id}>
                <Tooltip title={item.name}>{item.icon}</Tooltip>
              </Link>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}

export default Footer;

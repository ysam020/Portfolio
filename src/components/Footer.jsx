import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import Tooltip from "@mui/material/Tooltip";
import { socialData } from "../assets/data/SocialData";
import "../styles/footer.css";
import FooterSVG from "./FooterSVG";

function Footer() {
  return (
    <Container fluid className="footer" id="contact">
      <Row className="footer-row-1">
        <FooterSVG />

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

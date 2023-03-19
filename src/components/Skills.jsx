import { Tooltip } from "@mui/material";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/skills.css";

function Skills() {
  return (
    <Container className="skills" id="technologies">
      <Row>
        <h2>Technologies worked with</h2>
      </Row>
      <Row>
        <Col xs={6} lg={4} xl={2}>
          <Tooltip title="HTML5">
            <div className="skills-col">
              <img src={require("../assets/images/html.webp")} alt="" />
            </div>
          </Tooltip>
        </Col>
        <Col xs={6} lg={4} xl={2}>
          <Tooltip title="CSS3">
            <div className="skills-col">
              <img src={require("../assets/images/css.webp")} alt="" />
            </div>
          </Tooltip>
        </Col>
        <Col xs={6} lg={4} xl={2}>
          <Tooltip title="Javascript">
            <div className="skills-col">
              <img src={require("../assets/images/js.webp")} alt="" />
            </div>
          </Tooltip>
        </Col>
        <Col xs={6} lg={4} xl={2}>
          <Tooltip title="React">
            <div className="skills-col">
              <img src={require("../assets/images/react.webp")} alt="" />
            </div>
          </Tooltip>
        </Col>
        <Col xs={6} lg={4} xl={2}>
          <Tooltip title="Git">
            <div className="skills-col">
              <img src={require("../assets/images/git.webp")} alt="" />
            </div>
          </Tooltip>
        </Col>
        <Col xs={6} lg={4} xl={2}>
          <Tooltip title="Wordpress">
            <div className="skills-col">
              <img src={require("../assets/images/wordpress.webp")} alt="" />
            </div>
          </Tooltip>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;

import { Tooltip } from "@mui/material";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/skills.css";
import { skillsData } from "../assets/data/skillsData";

function Skills() {
  return (
    <Container className="skills" id="technologies">
      <Row>
        <h2>Technologies worked with</h2>
      </Row>
      <Row>
        {skillsData.map((item) => {
          return (
            <Col key={item.id} xs={6} lg={4} xl={2}>
              <Tooltip title={item.title}>
                <div className="skills-col">{item.img}</div>
              </Tooltip>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Skills;

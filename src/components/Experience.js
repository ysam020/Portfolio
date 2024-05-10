import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/experience.css";

function Experience() {
  return (
    <Container className="experience">
      <h2>Experience</h2>

      <Row>
        <Col xs={4}>
          <p className="experience-title">
            Alluvium IOT Solutions Private Limited <br />
            May 2023 - Working Here
          </p>
        </Col>
        <Col>
          I had the opportunity to lead the AlVision EXIM project, a significant
          project aimed at streamlining the export-import business. This
          experience allowed me to serve as the sole developer, giving me
          valuable insights into full-stack development. I leveraged my
          expertise in React.js for the frontend and Node.js for the backend to
          create a robust and efficient solution.
          <br />
          Additionally, I gained proficiency in deploying applications on AWS
          EC2 and utilising S3 for storage, ensuring that the project was both
          scalable and reliable. During my time at Alluvium IOT Solutions, I
          also contributed to three other projects—AlVision STAMP, AlVision TEX,
          and AlVision PI—where I focused on frontend development.
          <br />
          This experience further honed my skills and reinforced my commitment
          to delivering high-quality, user-friendly applications. Furthermore, I
          expanded my skill set by mastering event scheduling and automating
          report generation using Sendgrid. I successfully implemented automated
          report delivery in PDF and Excel formats, which improved efficiency
          and client satisfaction.
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;

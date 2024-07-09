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
          <div className="experience-description">
            <p>
              During my tenure at Alluvium IoT Solutions, I had the opportunity
              to lead the AlVision EXIM project, a significant initiative aimed
              at streamlining the export-import business. Serving as the sole
              developer, I gained invaluable insights into full-stack
              development. I leveraged my expertise in React.js for the frontend
              and Node.js for the backend to create a robust and efficient
              solution.
            </p>
            <ul>
              <li>
                Delved into advanced Node.js topics, including clustering,
                reading email attachments, converting them to JSON, and storing
                data in databases.
              </li>
              <li>
                Mastered event scheduling and automated report generation using
                SendGrid.
              </li>
              <li>
                Implemented automated report delivery in PDF and Excel formats,
                improving efficiency and client satisfaction.
              </li>
              <li>
                Gained expertise in Redis caching, enhancing application
                performance and scalability.
              </li>
              <li>
                Proficient in deploying applications on AWS EC2 and utilizing S3
                for storage, ensuring scalability and reliability.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;

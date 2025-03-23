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
            Paymaster Management Solutions <br />
            October 2024 - Working here
          </p>
        </Col>
        <Col>
          <div className="experience-description">
            <p>
              During my tenure at Paymaster Management Solutions, I played a key
              role in developing a robust HRMS web application, focusing on
              security, performance optimization, real-time communication and
              advanced React concepts to enhance user experience and system
              scalability.
            </p>
            <ul>
              <ul>
                <li>
                  <strong>Security Enhancements:</strong> Implemented{" "}
                  <strong>session-based authentication</strong> with{" "}
                  <strong>sliding session management</strong>,{" "}
                  <strong>2FA</strong>,<strong>WebAuthn</strong>,{" "}
                  <strong>login anomaly detection</strong>, and enforced{" "}
                  <strong>SSL</strong>, <strong>HSTS</strong>, and{" "}
                  <strong>HTTP security headers</strong> for secure
                  communication.
                </li>
                <li>
                  <strong>Data Protection:</strong> Focused on{" "}
                  <strong>data in transit</strong> and{" "}
                  <strong>data at rest</strong>, implementing{" "}
                  <strong>SSL</strong> and <strong>HSTS</strong> for secure
                  transmission and using <strong>AES-256 encryption</strong> to
                  store sensitive data in the database.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Utilized{" "}
                  <strong>Redis caching</strong> (write-through approach) with{" "}
                  <strong>MongoDB ChangeStreams</strong> and{" "}
                  <strong>BullMQ</strong>, along with{" "}
                  <strong>React lazy loading</strong>,{" "}
                  <strong>memoization</strong>,{" "}
                  <strong>Error Boundaries</strong>, and{" "}
                  <strong>Workbox</strong> service workers for offline
                  capabilities.
                </li>
                <li>
                  <strong>Real-Time & Scalable Architecture:</strong> Integrated{" "}
                  <strong>WebSockets</strong> and{" "}
                  <strong>Firebase push notifications</strong> for real-time
                  updates, optimized backend with{" "}
                  <strong>BullMQ messaging queues</strong>, and ensured{" "}
                  <strong>data integrity</strong> using{" "}
                  <strong>MongoDB transactions</strong>.
                </li>
                <li>
                  <strong>Data Optimization & Efficiency:</strong> Used{" "}
                  <strong>Protocol Buffers</strong> to minimize payload size and
                  enhance response times.
                </li>
              </ul>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <p className="experience-title">
            Alluvium IOT Solutions Private Limited <br />
            May 2023 - August 2024
          </p>
        </Col>
        <Col>
          <div className="experience-description">
            <p>
              During my tenure at Alluvium IoT Solutions, I had the opportunity
              to lead the AlVision EXIM project, a significant initiative aimed
              at streamlining the export-import business.
            </p>
            <ul>
              <li>
                Led the project with advanced AWS services, including&nbsp;
                <strong>Auto-scaling</strong> and&nbsp;
                <strong>Load Balancing</strong> for high availability and
                reliability.
              </li>
              <li>
                Implemented <strong>Blue/Green deployment</strong> for seamless
                updates and minimal downtime.
              </li>
              <li>
                Set up <strong>CI/CD pipelines for EC2 and CI/CD for S3</strong>
                , optimizing workflows.
              </li>
              <li>
                Deployed React applications on <strong>AWS Amplify</strong> for
                rapid and scalable frontend hosting.
              </li>
              <li>
                Implemented <strong>SSL for load balancers</strong> to secure
                communications, and utilized <strong>AWS SES</strong> for email
                services.
              </li>
              <li>
                Delved into advanced Node.js topics, including &nbsp;
                <strong>clustering</strong> for performance optimization,
                reading email attachments, converting them to JSON, and storing
                data in databases.
              </li>
              <li>
                Implemented automated &nbsp;
                <strong>report delivery in PDF and Excel formats</strong>,
                improving efficiency and client satisfaction.
              </li>
              <li>
                Gained expertise in <strong>Redis caching</strong>, enhancing
                application performance and scalability.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;

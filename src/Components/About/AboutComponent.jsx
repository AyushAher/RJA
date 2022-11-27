import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutComponent.css";
const AboutComponent = () => (
  <>
    <Container fluid className="about">
      <Row>
        <Col md={5} className="catchPhrase">
          <div className="headingText">
            <div className="box">
              <div className="line" />
            </div>
          </div>

          <h6 className="about-heading">
            <span>Our</span> Associates
          </h6>
          <p className="caption">
            A team is unbreakable, if members are strong!
          </p>
        </Col>

        <Col md={7}>
          <img
            className="teamPic"
            src={process.env.PUBLIC_URL + `Images/teamPic.png`}
            alt="Team"
          />
        </Col>
      </Row>
      <hr />
      <div className="mainBody">
        <h6>About Us</h6>
        <div className="underline" />
        <div className="content">
          <p>
            Rajendra Gokul Jaigude, founder of Rajendra Jaigude & Associates is
            one of Pune's best law firms, having reputation for its expertise
            and excellence in legal services.
          </p>

          <p>
            Founded on the principles of ethical and quality Law practice,
            commitment, mutual trust, and client contentment. We offer a wide
            range of legal services in the areas of Property Laws, Civil
            Litigation, Real Estate and Construction, Revenue matters,
            Co-operative Society.
          </p>
          <p>
            Rajendra Jaigude & Associates has a team of dedicated Lawyers and
            paralegals, having a passion for work and impeccable dedication to
            the interests of its clients, and an outstanding ability with
            significant depth and breadth of required experience in the field to
            provide solutions for achieving the best results for its clients.
          </p>
          
          <div className="d-flex justify-content-end mt-4">
            <button className="btn-req-quote" type="button">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </Container>
  </>
);

export default AboutComponent;

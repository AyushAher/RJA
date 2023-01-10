import React from "react";
import "./Home.Component.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import IntroductionComponent from "./Introduction.Component";
import { PractiseAreaComponents } from "./PractiseArea.Components";
import { AssociatesComponent } from "./AssociatesComponent";
import { AgreementComponent } from "../Layout/Agreement.Component";

const HomeComponent = () => {
  return (
    <>
      <AgreementComponent />
      <Container fluid className="hero">
        <div className="hero-Section">
          <img
            className="hero-Img"
            src={process.env.PUBLIC_URL + "/Images/PuneDistrictCourt.jpg"}
            alt="Pune District Court"
          />
        </div>

        <div className="hero-Text">
          <p>
            Founded in 2010,
            <br /> Rajendra Jaigude And Associates
          </p>

          <button className="hero-Link">
            <Link to={"/about"}>Learn More</Link>
          </button>
        </div>
      </Container>
      <IntroductionComponent />
      <PractiseAreaComponents />
      <AssociatesComponent />
    </>
  );
};

export default HomeComponent;

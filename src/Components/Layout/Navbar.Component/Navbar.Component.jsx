import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.Component.css";

const Navbarcomponent = () => {
  return (
    <>
      <Navbar bg="white" className="navbar" variant="light">
        <Container fluid>
          <Link to="/" className="nav-Link ms-2">
            <Navbar.Brand className="brand-Text">
              Rajendra Jaigude &amp; Associates
            </Navbar.Brand>
          </Link>

          <Nav className="justify-content-end me-4">
            <Link to="/" className="nav-Link">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/about" className="nav-Link">
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link to="/contact" className="nav-Link">
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcomponent;

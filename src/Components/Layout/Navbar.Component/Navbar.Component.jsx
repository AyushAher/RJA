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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcomponent;

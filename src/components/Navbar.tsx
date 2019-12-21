import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const BootrtapNavBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand className="mr-5">
          <img width="50px" height="50px" src={Logo} alt="logo" /> Agro Info
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="ml-3 mr-3">
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </Nav.Link>
          <Nav.Link className="ml-3 mr-3">
            <Link to="/dashboard">
              <i className="fas fa-columns"></i> Dashboard
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <i className="fas fa-sign-in-alt"></i> Log In
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BootrtapNavBar;

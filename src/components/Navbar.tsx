import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const BootrtapNavBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand className="mr-5">
          <img width="50px" height="50px" src={Logo} alt="logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="ml-3 mr-3">
            <Link to="/">Home </Link>
          </Nav.Link>
          <Nav.Link className="ml-3 mr-3">
            <Link to="/dashboard">Dashboard</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BootrtapNavBar;

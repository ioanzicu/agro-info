import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { LANDING, DASHBOARD, REGISTER, SIGN_IN } from "../constants/routes";
import Logo from "../images/logo.png";

const BootrtapNavBar = (props: any) => {
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
          <Link className="m-3" to={LANDING}>
            <i className="fas fa-home"></i> Home
          </Link>
          <Link className="m-3" to={DASHBOARD}>
            <i className="fas fa-columns"></i> Dashboard
          </Link>
        </Nav>
        <Nav>
          <Link className="m-3" to={SIGN_IN}>
            <i className="fas fa-sign-in-alt"></i> Sign In
          </Link>
          <Link className="m-3" to={REGISTER}>
            Register
          </Link>
        </Nav>
        <Nav>
          <Link className="m-3" to={SIGN_IN}>
            <i className="fas fa-sign-in-alt"></i> Sign Out
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(BootrtapNavBar);

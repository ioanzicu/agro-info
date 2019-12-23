import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useStore } from "react-stores";
import { store } from "../store/store";
import { LANDING, DASHBOARD, REGISTER, SIGN_IN } from "../constants/routes";
import Logo from "../images/logo.png";

const BootrtapNavBar: React.FC = () => {
  const authStoreState = useStore(store);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <NavLink activeClassName="active" to="/">
        <Navbar.Brand className="mr-5">
          <img width="50px" height="50px" src={Logo} alt="logo" /> Agro Info
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink activeClassName="active" className="m-3" to={LANDING}>
            <i className="fas fa-home"></i> Home
          </NavLink>
          {authStoreState.authorized && (
            <NavLink activeClassName="active" className="m-3" to={DASHBOARD}>
              <i className="fas fa-columns"></i> Dashboard
            </NavLink>
          )}
        </Nav>
        <Nav>
          <NavLink activeClassName="active" className="m-3" to={SIGN_IN}>
            <i className="fas fa-sign-in-alt"></i> Sign In
          </NavLink>
          <NavLink activeClassName="active" className="m-3" to={REGISTER}>
            Register
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BootrtapNavBar;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useStore } from "react-stores";
import { logout } from "../store/authActions";
import { store } from "../store/store";
import {
  LANDING,
  ABOUT,
  CONTACT,
  DASHBOARD,
  USER_ACCOUNT,
  SIGN_IN
} from "../constants/routes";
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
          <NavLink activeClassName="active" className="m-3" to={ABOUT}>
            <i className="fas fa-info-circle"></i> About
          </NavLink>
          <NavLink activeClassName="active" className="m-3" to={CONTACT}>
            <i className="fas fa-phone-alt"></i> Contact
          </NavLink>
          {authStoreState.authorized && (
            <>
              <NavLink activeClassName="active" className="m-3" to={DASHBOARD}>
                <i className="fas fa-columns"></i> Dashboard
              </NavLink>
              <NavLink
                activeClassName="active"
                className="m-3"
                to={USER_ACCOUNT}
              >
                <i className="fas fa-user-circle"></i> User Account
              </NavLink>
            </>
          )}
        </Nav>
        <Nav>
          {authStoreState && authStoreState.authorized ? (
            <>
              <Nav.Link className="m-3" disabled>
                <i className="fas fa-smile-wink"></i> Hello,{" "}
                {authStoreState &&
                  authStoreState.displayName &&
                  authStoreState.displayName.split(" ")[1]}
                !
              </Nav.Link>
              <Nav.Link className="m-3" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i> Sign Out
              </Nav.Link>
            </>
          ) : (
            <NavLink activeClassName="active" className="m-3" to={SIGN_IN}>
              <i className="fas fa-sign-in-alt"></i> Sign In
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BootrtapNavBar;

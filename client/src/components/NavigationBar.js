import React from "react";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import companyLogo from "../images/logo.jpg";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      fixed="top"
      sticky="top"
      expand="lg"
    >
      <Navbar.Brand>
        <LinkContainer to="/">
          <Nav.Link>
            <img
              src={companyLogo}
              height="50"
              width="140"
              alt="Company Logo"
              className="d-inline-black align-top mx-3"
            />
          </Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
      {/* Hamburger Menu */}
      <Navbar.Toggle className="mx-3 h1" />
      {/* Links */}
      <Navbar.Collapse className="mx-3">
        <Nav className="ms-auto h4">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aboutUs">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contactUs">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

/**********************************************************
 * File: NavigationBar.js
 *
 * Renders a navigation bar that remains at the top of the
 * screen at all times.
 *
 *
 */

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import companyLogo from "../images/logo.jpg";

const NavigationBar = () => {
  // const NavigationBar = ({ setMode }) => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      fixed="top"
      sticky="top"
      expand="lg"
      className="shadow-lg"
    >
      {/************************************
       * Company Logo in top left
       ********************************** */}
      <Navbar.Brand>
        <LinkContainer to="/">
          <Nav.Link>
            <img
              src={companyLogo}
              height="50"
              width="140"
              alt="Company Logo"
              className="d-inline-black align-top mx-3"
              // onClick={() => setMode("Home")}
            />
          </Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
      {/* Hamburger Menu */}
      <Navbar.Toggle className="mx-3 h1" />
      {/*************************************
       * List of Links
       **************************************/}
      <Navbar.Collapse className="mx-3">
        <Nav className="ms-auto h4">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            {/* <Nav.Link onClick={() => setMode("Home")}>Home</Nav.Link> */}
          </LinkContainer>
          <LinkContainer to="/aboutUs">
            <Nav.Link>About Us</Nav.Link>
            {/* <Nav.Link onClick={() => setMode("About Us")}>About Us</Nav.Link> */}
          </LinkContainer>
          <LinkContainer to="/contactUs">
            <Nav.Link>
              {/* <Nav.Link onClick={() => setMode("Contact Us")}> */}
              Contact Us
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

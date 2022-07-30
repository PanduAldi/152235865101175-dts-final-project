import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";
import Logo from "../logo.svg";

const HeaderComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={Logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Beranda</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/jadwal-sholat">
                <Nav.Link>Jadwal Sholat</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tentang">
                <Nav.Link>Tentang</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">🔐 Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;

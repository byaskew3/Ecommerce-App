import React, { Component } from "react";
import { Container, Navbar, FormControl, Nav, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">SWEAT.</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style = {{ width: 500 }}
            placeholder="Search for a program"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav className="me-auto">
          <NavDropdown alignRight>
            <NavDropdown.Item variant="light">
              <Badge>{2}</Badge>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default navbar;

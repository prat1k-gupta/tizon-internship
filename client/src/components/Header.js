import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} exact to="/">
          Tizon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} exact to="/stats">
              Statistics
            </Nav.Link>
            <NavDropdown title="UserName" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} exact to="/edit">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

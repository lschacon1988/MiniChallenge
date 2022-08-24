import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/table' >Table</Nav.Link>
              <Nav.Link as={Link} to='/form' >Formulario</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
        <Outlet></Outlet>
      
    </>
  );
};

export default NavBar;

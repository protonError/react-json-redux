import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
function header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Redux
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              Add
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              contact us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default header;

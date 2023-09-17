// Import React modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import Bootstrap modules
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import other npm modules
import { SiCodeigniter } from 'react-icons/si';

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <SiCodeigniter className="mb-1"/>
          {' '}
          PortfolioBase
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* LEFT MAIN NAVS */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}   

export default Header
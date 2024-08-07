import { Container, Nav, Navbar } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; 

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="AFMSH ProHealth Clinic Logo" style={{ width: '100px', height: '70px' }}  className="d-inline-block align-top" />{' '}
          AFMSH ProHealth Clinic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-5 fw-bold">
            <Nav.Link as={Link} to="/reservations">
              Reserve
            </Nav.Link>
          </Nav>
          <Navbar.Text className="fs-5 fw-bold">
            <Nav.Link as={Link} to="/login">
              Staff <FontAwesomeIcon icon={'fa-solid fa-right-to-bracket' as any} className="ms-2" />
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

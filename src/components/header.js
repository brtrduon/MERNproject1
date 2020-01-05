import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { images } from '../assets/images';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav.Link href='/'><img src={images.logo} alt='logo.png' /></Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/reserve">Reservations</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;
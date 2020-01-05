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
          <Nav.Link href="/"><h4 className='pr-5'>Home</h4></Nav.Link>
          <Nav.Link href="/about"><h4 className='pr-5'>About</h4></Nav.Link>
          <Nav.Link href="/gallery"><h4 className='pr-5'>Gallery</h4></Nav.Link>
          <Nav.Link href="/reserve"><h4 className='pr-5'>Reservations</h4></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;
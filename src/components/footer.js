import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';

import '../assets/Footer.css';

const Footer = () => {
  return (
    <div className='container pt-5 pb-5'>
      <CardDeck>
        <Card border='light'>
          <Card.Body>
            <Card.Title>
              <h6>About Us</h6>
            </Card.Title>
            <Card.Text>
              <p id='p' className='small'>Jamie's Kitchen is located in the heart of Mountain View, specializing in Japanese-American cuisine.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border='light'>
          <Card.Body>
            <Card.Title>
              <h6>Contact Info</h6>
            </Card.Title>
            <Card.Text>
              <p className='small mb-1'>Address:</p>
              <p className='small'>1600 Amphitheatre Pkwy, Mountain View, CA 94043</p>
              <p className='small mb-1'>Phone:</p>
              <p className='small'>+1 (123) 456-7890</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border='light'>
          <Card.Body>
            <Card.Title>
              <h6>Quick Links</h6>
            </Card.Title>
            <Card.Text>
              <Link id='a' className='small d-block mb-1 text-secondary' to='/about'>About</Link>
              <Link id='a' className='small d-block mb-1 text-secondary' to='/menu'>Menu</Link>
              <Link id='a' className='small d-block mb-1 text-secondary' to='/reserve'>Reservations</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card border='0'>
          <Card.ImgOverlay>
            <Card.Text>
              <p className='small text-center'>&copy; Photos by https://unsplash.com/</p>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </CardDeck>
    </div>
  )
};

export default Footer;
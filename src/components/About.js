import React, { Fragment } from 'react';
import { Carousel, Card, CardDeck } from 'react-bootstrap';

import { images } from '../assets/images';

const About = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={images.aboutBanner} alt='aboutBanner.jpg' />
          <Carousel.Caption id='carouselCaption'>
            <h1>About Us</h1>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      
      <div className='container pt-5 pb-5'>
        <h2 className='text-center pb-5'>Meet the Founder</h2>
        <CardDeck>
          <Card border='0'>
            <Card.Body>
              <img className='d-block w-100' src={images.profile_pic} alt='profile_pic.jpg' />
            </Card.Body>
          </Card>
          <Card border='0'>
            <Card.Body>
              <Card.Text>
                <p className='text-center pt-4'>Born and raised in Tokyo, Japan, Yukie Jamie discovered her talent and passion for cooking during her pre-teen years. After completing her bachelor's degree at the University of California, Berkeley, Jamie worked as Head Chef at several acclaimed restaurants in the Bay Area including, but not limited to, Fleur de Lys in San Francisco, Firehouse No.1 Gastropub in San Jose, and Wood Tavern in Oakland. Wanting to bring together a mixture of Japanese and American cuisine, and to expand upon her passion for cooking, Jamie opened Jamie's Kitchen, a 100-seat neighborhood restaurant, in the heart of Mountain View, CA. "I'm really excited to bring together such a hybrid of taste and culture to the community," Jamie explains. "It's always been something I wanted to do to since I was a little girl to create delectable dishes that no one has seen before that everyone can enjoy, regardless if they are a member of our community or if they are just visiting." </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <img className='d-block w-100' src={images.aboutBot} alt='aboutBot.jpg' />
    </Fragment>
  )
};

export default About;
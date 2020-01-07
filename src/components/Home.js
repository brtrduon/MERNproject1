import React, { Fragment } from 'react';
import { Carousel, Card, CardDeck } from 'react-bootstrap';

import { images } from '../assets/images';
import '../assets/index.css';

const Home = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item id='carouselItem'>
          <img className='d-block w-100' src={images.homeCarousel1} alt='homeCarousel1.jpg' />
          <Carousel.Caption id='carouselCaption'>
            <h1>Food and More</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={images.homeCarousel2} alt='homeCarousel2.jpg' />
          <Carousel.Caption id='carouselCaption'>
            <h1>Full Bar</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={images.homeCarousel3} alt='homeCarousel3.jpg' />
          <Carousel.Caption id='carouselCaption'>
            <h1>Fine Dining</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='container pt-5 pb-5'>
        <h2 className='text-center pb-5'>Welcome</h2>
        <CardDeck>
          <Card border='0'>
            <Card.Body>
              <Card.Title>
                <h3 className='text-center'>2012</h3>
              </Card.Title>
              <Card.Text>
                <p className='text-center'>Founded by Yukie Jamie as a local restaurant specializing in traditional Japanese cuisine.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='0'>
            <Card.Body>
              <Card.Title>
                <h3 className='text-center'>2016</h3>
              </Card.Title>
              <Card.Text>
                <p className='text-center'>Cuisine expanded to contemporary Japanese-American bar-style.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='0'>
            <Card.Body>
              <Card.Title>
                <h3 className='text-center'>2019</h3>
              </Card.Title>
              <Card.Text>
                <p className='text-center'>Partnership with one of California's top-rated chefs.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>

      <img className='d-block w-100' src={images.homeMid} alt='homeMid.jpg' />

      <div className='container pt-5 pb-5'>
        <h2 className='text-center pb-5'>Our Services</h2>
        <CardDeck>
          <Card border='0'>
            <Card.Body>
              <Card.Title>
                <h4 className='text-center'>Lunch</h4>
              </Card.Title>
              <Card.Text>
                <p className='text-center'>Eat fresh. Drink more. Live long. Be happy.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='0'>
            <Card.Body>
              <Card.Title>
                <h4 className='text-center'>Dinner</h4>
              </Card.Title>
              <Card.Text>
                <p className='text-center'>The pleasure of diverse selections where the flavors inebriate you.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='0'>
            <Card.Body>
              <Card.Title>
                <h4 className='text-center'>Late Night</h4>
              </Card.Title>
              <Card.Text>
                <p className='text-center'>We have a full bar as well as soft drinks. Alcoholic beverages are served until last call.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>

      <img className='d-block w-100' src={images.homeBot} alt='homeBot.jpg' />
    </Fragment>
  )
};

export default Home;
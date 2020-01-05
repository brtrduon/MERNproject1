import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

import { images } from '../assets/images';

const Home = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={images.home1} alt='home1.jpg' />
          <Carousel.Caption>
            <h3>fruit from</h3>
            <p>crack pipe</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={images.home2} alt='home2.jpg' />
          <Carousel.Caption>
            <h3>fruit from</h3>
            <p>crack pipe</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={images.home3} alt='home3.jpg' />
          <Carousel.Caption>
            <h3>fruit from</h3>
            <p>crack pipe</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
};

export default Home;
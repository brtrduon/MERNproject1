import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

import { images } from '../assets/images';

const Home = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img src={images.one} alt='one.jpg' />
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
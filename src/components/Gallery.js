import React from 'react';
import { images } from '../assets/images';

const Gallery = () => {
  return (
    <div>
      <img src={images.one} alt='one' />
      <img src={images.two} alt='two' />
      <img src={images.three} alt='three' />
      <img src={images.four} alt='four' />
      <img src={images.five} alt='five' />
      <img src={images.six} alt='six' />
      <img src={images.seven} alt='seven' />
      <img src={images.eight} alt='eight' />
      <img src={images.nine} alt='nine' />
      <img src={images.ten} alt='ten' />
    </div>
  )
};

export default Gallery;
import React, { Fragment } from 'react';
import { images } from '../assets/images';

const About = () => {
  return (
    <Fragment>
      <p className=''>About</p>
      <p>
          Jamie's Kitchen is a local restaurant focused on delivering a Japanese-American hybrid culture and food. Founded in the summer of 2014, Jamie's Kitchen has been a mainstay in the Mountain View community, and has since become an icon of cultural unity and diversity. 
      </p>
      <div className=''>
          <p>
              "It's always been something I wanted to do...to create delectable dishes that no one has seen before that everyone can enjoy..."
          </p>
      </div>
      <p className=''>Jamie Lynn Sato</p>
      <p>General Manager</p>
      <img className='' src={images.profile_pic} alt='profile_pic.jpg' />
      <p>
      Born and raised in Tokyo, Japan, Jamie Lynn Sato discovered her talent and passion for cooking during her pre-teen years. After completing her bachelor's degree at the University of California, Berkeley, Jamie worked as Head Chef at several acclaimed restaurants in the Bay Area including, but not limited to, Fleur de Lys in San Francisco, Firehouse No.1 Gastropub in San Jose, and Wood Tavern in Oakland.
      </p>
      <p>
      Wanting to bring together a mixture of Japanese and American cuisine, and to expand upon her passion for cooking, Jamie opened Jamie's Kitchen, a 100-seat neighborhood restaurant, in the heart of Mountain View, CA. "I'm really excited to bring together such a hybrid of taste and culture to the community," Jamie explains. "It's always been something I wanted to do to since I was a little girl to create delectable dishes that no one has seen before that everyone can enjoy, regardless if they are a member of our community or if they are just visiting." 
      </p>
    </Fragment>
  )
};

export default About;
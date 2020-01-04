import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { images } from '../assets/images';

const Header = () => {
  return (
    <Fragment>
      <li className='' key={1}>
        <Link className='' to='/'><img className='' src={images.logo} alt='logo.png' /></Link>
      </li>,
      <li className='' key={2}>
        <Link className='' to='/about'>ABOUT</Link>
      </li>,
      <li className='' key={3}>
        <Link className='' to='/location'>LOCATION</Link>
      </li>,
      <li className='' key={4}>
        <Link className='' to='/gallery'>GALLERY</Link>
      </li>,
      <li className='' key={5}>
        <Link className='' to='/reserve'>RESERVATIONS</Link>
      </li>
    </Fragment>
  )
};

export default Header;
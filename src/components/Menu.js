import React, { Fragment } from 'react';
import { Carousel, Card, CardDeck } from 'react-bootstrap';

import { images } from '../assets/images';
import '../assets/index.css';

const Menu = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={images.menuBanner} alt='menuBanner.jpg' />
          <Carousel.Caption id='carouselCaption'>
            <h1>Menu</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='container pt-5 pb-5'>
        <h2 className='text-center pb-5'>Our menu</h2>
        <CardDeck>
          <Card border='0'>
            <Card.Body>
              <Card.Text>
                <div className="menu-item">
                  <h5>Orange Chicken</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>baby corn, bok choy, orange glaze, jasmine rice</p>
                    <div className="menu-price">$18.95</div>
                  </div>
                </div>
                <div className="menu-item">
                  <h5>Sirloin and Loaded Potatoes</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>onion rings, jalapeno, baby broccoli, house-made steak sauce</p>
                    <div className="menu-price">$20.95</div>
                  </div>
                </div>
                <div className="menu-item">
                  <h5>Ginger Crusted Salmon</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>wasabi mashed potatoes, snap peas, carrots, spicy garlic paste</p>
                    <div className="menu-price">$25.95</div>
                  </div>
                </div>
                <div className="menu-item">
                  <h5>Rum Shrimp Pasta</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>angel hair, cream of tomato, parmesan</p>
                    <div className="menu-price">$15.25</div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='0'>
            <Card.Body>
              <Card.Text>
                <div className="menu-item">
                  <h5>Ahi Poke Salad</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>cucumber, carrot, radish, tuna, garlic, with poke dressing</p>
                    <div className="menu-price">$13.95</div>
                  </div>
                </div>
                <div className="menu-item">
                  <h5>Combination Sashimi</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>chef's assortment</p>
                    <div className="menu-price">$16.95</div>
                  </div>
                </div>
                <div className="menu-item">
                  <h5>Firecracker</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>spicy tuna, unagi, kani kama, bell pepper, jalapeno, and house sweet sauce</p>
                    <div className="menu-price">$14.95</div>
                  </div>
                </div>
                <div className="menu-item">
                  <h5>Unagi Donburi</h5>
                  <div className="mi-meta">
                    <p className='pb-3'>Grilled freshwater eel and cooked vegetables over seasoned rice</p>
                    <div className="menu-price">$24.95</div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div className='container pt-5 pb-5'>
        <h2 className='text-center pb-5'>Drinks</h2>
        <p className='text-center'>We have a full bar as well as soft drinks. Alcoholic beverages are served until last call.</p>
      </div>
      <img className='d-block w-100' src={images.menuBot} alt='menuBot.jpg' />
    </Fragment>
  )
};

export default Menu;
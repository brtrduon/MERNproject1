import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Index from './Index';
import About from './About';
import Gallery from './Gallery';
import Location from './Location';
import Reserve from './Reserve';
// might need to change the way that history is being imported if error is thrown
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/about' exact component={About} />
            <Route path='/gallery' exact component={Gallery} />
            <Route path='/location' exact component={Location} />
            <Route path='/reserve' exact component={Reserve} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
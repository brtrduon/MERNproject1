import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Reserve from './Reserve';

import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/gallery' exact component={Gallery} />
            <Route path='/reserve' exact component={Reserve} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
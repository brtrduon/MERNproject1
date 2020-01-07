import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

import Home from './Home';
import About from './About';
import Menu from './Menu';
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
            <Route path='/menu' exact component={Menu} />
            <Route path='/reserve' exact component={Reserve} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
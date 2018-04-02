import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './components/views/root';
import About from './components/views/about';
import Reserve from './components/views/reserve';
import Confirmation from './components/views/confirmation';
import Gallery from './components/views/gallery';
import Fullmenu from './components/views/fullmenu'
import Site from './components/views/site';

import Header from './components/header';
import Footer from './components/footer';

import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './style.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path='/' component={Root} />
                <Route path='/about' component={About} />
                <Route path='/reserve' component={Reserve} />
                <Route path='/confirmation' component={Confirmation} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/fullmenu' component={Fullmenu} />
                <Route path='/location' component={Site} />
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
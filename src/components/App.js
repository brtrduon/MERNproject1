import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Index from './views'
import About from './views/about'
import Confirmation from './views/confirmation'
import Gallery from './views/gallery'
import Location from './views/Location'
import Reserve from './views/reserve'

import Header from './header'
import Footer from './footer'
import history from '../history'

const App = () => {
    return (
        <div className='wrapper'>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/about' exact component={About} />
                        <Route path='/confirmation' exact component={Confirmation} />
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

import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Index from './views'
import About from './views/About'
import Confirmation from './views/Confirmation'
import Gallery from './views/Gallery'
import Location from './views/Location'
import Reserve from './views/Reserve'

import Header from './Header'
import history from '../history'

const App = () => {
    return (
        <div>
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
                </div>
            </Router>
        </div>
    )
}

export default App
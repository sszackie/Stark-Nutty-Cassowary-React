import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Tools from './views/tools'
import Home from './views/home'
import UnblockedGames from './views/unblocked-games'
import Proxies from './views/proxies'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Tools} exact path="/tools" />
        <Route component={Home} exact path="/" />
        <Route component={UnblockedGames} exact path="/unblocked-games" />
        <Route component={Proxies} exact path="/proxies" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

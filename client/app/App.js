import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import Home from './home'

const App = (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={Home} >
    </Route>
  </Router>
)

export default App

// <Route path='/home' component={Search} />
// <IndexRoute component={Home} />

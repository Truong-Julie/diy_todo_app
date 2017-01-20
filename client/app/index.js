import React from 'react'
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import App from './App'
import Home from './home/home'
import Portfolio from './portfolio/portfolio'
import AboutMe from './aboutMe/aboutMe'
import ContactMe from './contactMe/contactMe'
import ReactDom from 'react-dom'
import data from '../data/data'

const Index = (props) => (
  <Router history={hashHistory} render={applyRouterMiddleware(useScroll(() => true))} >
    <Route path='/' component={App} data={data} >
      <IndexRoute component={Home} data={data} />
      <Route path='/aboutMe' component={AboutMe} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contactMe' component={ContactMe} />
    </Route>
  </Router>
)

ReactDom.render(<Index />, document.getElementById('app'))

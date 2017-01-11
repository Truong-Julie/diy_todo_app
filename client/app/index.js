import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import App from './App'
import Home from './home/home'
import ReactDom from 'react-dom'
import data from '../data/data'

const Index = (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={App} data={data} >
      <IndexRoute component={Home} data={data} />
    </Route>
  </Router>
)

ReactDom.render(<Index />, document.getElementById('app'))
// export default App
/*


*/


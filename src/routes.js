import React from 'react'
import {Route, IndexRoute} from 'react-router'
import ThingPage from './components/thing/ThingPage'
import LandingPage from './components/thing/LandingPage'
import App from './components/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}></IndexRoute>
    <Route path="/home" component={ThingPage}></Route>
  </Route>
)

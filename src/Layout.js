import React, { Component, Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Content from './components/layout/Content'
import Checkout from './components/pages/Checkout'
import Management from './components/pages/Management'

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={Checkout} />
          <Route path="/management" component={Management} />
        </Switch>
      </Router>
    )
  }
}

import React, { Component, Fragment } from 'react'

import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Content from './components/layout/Content'
import Checkout from './components/pages/Checkout'

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Sidebar />
        <Content>
          <Checkout />
        </Content>
      </Fragment>
    )
  }
}

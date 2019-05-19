import React, { Component, Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import ProductsList from './components/reusable/ProductsList'
import Sidebar from './components/layout/Sidebar'

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Sidebar />
        <ProductsList />
      </Fragment>
    )
  }
}

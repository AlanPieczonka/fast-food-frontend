import React, { Component, Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import ProductsList from './components/reusable/ProductsList'

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ProductsList />
      </Fragment>
    )
  }
}

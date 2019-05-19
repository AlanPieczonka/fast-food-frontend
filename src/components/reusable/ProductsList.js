import React, { Component } from 'react'
import Parse from '../../config/parse'

export default class ProductsList extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    const query = new Parse.Query('Products');
    const products = await query.find()
    this.setState({products})
  }

  render() {
    const { products } = this.state
    const PRODUCTS_LIST = products.length
      ? products.map(product => <div key={product.id}>{product.get('displayName')}</div>)
      : "Loading..."
    return PRODUCTS_LIST
  }
}

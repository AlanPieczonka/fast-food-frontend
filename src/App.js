import React, { Component } from 'react';
import Parse from './config/parse';

class App extends Component {
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
    const PRODUCTS = products.map(product => <div key={product.id}>{product.get('displayName')}</div>)
    return products.length
      ? PRODUCTS
      : "No products yet..."
  }
}

export default App;

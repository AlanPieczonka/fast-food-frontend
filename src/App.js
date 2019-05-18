import React, { Component } from 'react';
import Parse from './config/parse';
import Layout from './Layout';

export default class App extends Component {
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
    return <Layout />
  }
}

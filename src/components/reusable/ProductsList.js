import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import ProductCard from './ProductCard'
import ProductListing from './ProductListing'

const GET_PRODUCTS = gql`
  query {
    products {
      name
      price
      description
      quantityLimit
      photoUrl
      thumbnailUrl
    }
  }
`;

const ProductList = ({ type = "checkout" }) => (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error}`;

      return (
        <div className="products-list">
          {data.products.map(product => {
            return {
              checkout: <ProductListing {...product} />,
              management: <ProductCard {...product} />
            }[type]
          })}
        </div>
      )
    }}
  </Query>
)

export default ProductList

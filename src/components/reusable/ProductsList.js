import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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

export default () => (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error}`;

      return data.products.map(({ name, price, thumbnailUrl }) => (
        <div key={name} className="p-card --border-bottom">
          <img className="p-card__thumbnail" src={thumbnailUrl} alt="Product Thumbnail" />
          
          <div className="p-card__content">
            <h2 className="p-card__heading">{name}</h2>

            <div className="p-card__footer">
              <span className="p-card__quantity">
                <input 
                  type="submit"
                  value="-"
                  readOnly
                />

                <input 
                  type="text"
                  value="1"
                  readOnly
                />

                <input 
                  type="submit"
                  value="+"
                  readOnly
                />
              </span>
              <span className="p-card__price">{price} zł</span>
            </div>
          </div>
        </div>
      ))
    }}
  </Query>
)

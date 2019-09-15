import React from 'react'

const ProductListing = ({ name, thumbnailUrl, price }) => (
  <div key={name} className="p-listing --border-bottom">
    <img className="p-listing__thumbnail" src={thumbnailUrl} alt="Product Thumbnail" />
    
    <div className="p-listing__content">
      <h2 className="p-listing__heading">{name}</h2>

      <div className="p-listing__footer">
        <span className="p-listing__quantity">
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
        <span className="p-listing__price">{price} zł</span>
      </div>
    </div>
  </div>
)

export default ProductListing

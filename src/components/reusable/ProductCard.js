import React from 'react'

const toggleEditMode = index => () => {}

const removeProduct = id => () => {}

const ProductCard = ({ name, thumbnailUrl, price, id }, index) => (
  <div key={name} className="p-card">
    <div className="p-card__toolbar">
      <button
        className="p-card__toolbar-button --info"
        onClick={toggleEditMode(index)}
      >
        Edit
      </button>

      <button
        className="p-card__toolbar-button --danger"
        onClick={removeProduct(id)}
      >
        Remove
      </button>
    </div>

    <img className="p-card__thumbnail" src={thumbnailUrl} alt="Product Thumbnail" />
    
    <div className="p-card__content">
      <h2 className="p-card__heading">{name}</h2>

      <div className="p-card__footer">
        <span className="p-card__price">{price} zł</span>
      </div>
    </div>
  </div>
)

export default ProductCard

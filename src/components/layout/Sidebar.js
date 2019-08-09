import React, { useState } from 'react'

const initialProducts = [
  {
    name: 'Bourbon BBQ Grander Box',
    price: 31.95,
    quantity: 2
  },
  {
    name: 'Chicken Cinger',
    price: 23.32,
    quantity: 3
  }
]

export default function Sidebebar () {
  const [products, setProducts] = useState(initialProducts)
  const sum = products.map(({ price, quantity }) => price * quantity).reduce((x, y) => x + y).toFixed(2)

  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">Current Order</h2>
      {
        products.map(({ name, quantity, price }) => {
        return (<div className="sidebar__basket">
          <div className="p-card --border-bottom">
            <img className="p-card__thumbnail" src="https://placehold.it/100x100" alt="Product Thumbnail" />
            <div className="p-card__content">
              <h2 className="p-card__heading">{name}</h2>
              <div className="p-card__footer">
                <span className="p-card__quantity">
                  <input 
                    type="submit" 
                    value="-" 
                    onClick={() => {
                      const updatedProducts = [...products]
                      const index = updatedProducts.findIndex(product => product.name === name)
                      if (updatedProducts[index].quantity !== 0) updatedProducts[index].quantity = updatedProducts[index].quantity - 1

                      setProducts(updatedProducts)
                    }} 
                  />
                  <input type="text" value={quantity} disabled/>
                  <input 
                    type="submit" 
                    value="+" 
                    onClick={() => {
                      const updatedProducts = [...products]
                      const index = updatedProducts.findIndex(product => name === product.name)
                      updatedProducts[index].quantity = updatedProducts[index].quantity + 1

                      setProducts(updatedProducts)
                    }}
                  />
                </span>
                <span className="p-card__price">{price} zł</span>
              </div>
            </div>
          </div>
        </div>
        )})
      }
      <div className="sidebar__footer">
        <div className="sidebar__summary">
          <span>Sum:</span>
          <span>{sum} zł</span>
        </div>
        <div className="sidebar__submit">
          <button>Complete Order</button>
        </div>
      </div>
    </div>
  )
}

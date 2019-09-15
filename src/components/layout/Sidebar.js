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

  const sum = products.length ? products.map(({ price, quantity }) => price * quantity).reduce((x, y) => x + y).toFixed(2) : 0

  const lowerProductQuantity = index => () => {
    const updatedProducts = [...products]

    if (updatedProducts[index].quantity <= 0)
      return

    updatedProducts[index].quantity -= 1

    setProducts(updatedProducts)
  }

  const increaseProductQuantity = index => () => {
    const updatedProducts = [...products]
    updatedProducts[index].quantity += 1

    setProducts(updatedProducts)
  }

  const removeProduct = index => () => {
    const updatedProducts = [...products]
    updatedProducts.splice(index, 1)

    setProducts(updatedProducts)
  }

  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">Current Order</h2>

      {products.map(({ name, quantity, price }, index) => (
        <div className="sidebar__basket" key={name}>
          <div className="p-card --border-bottom">
            <img className="p-card__thumbnail" src="https://placehold.it/100x100" alt="Product Thumbnail" />
            <div className="p-card__content">
              <h2 className="p-card__heading">{name}</h2>
              <div className="p-card__footer">
                <span className="p-card__quantity">
                  <input 
                    type="submit" 
                    value="-"
                    readOnly
                    onClick={lowerProductQuantity(index)} 
                  />

                  <input
                    type="text"
                    value={quantity}
                    disabled
                    readOnly
                  />

                  <input 
                    type="submit" 
                    value="+"
                    readOnly
                    onClick={increaseProductQuantity(index)}
                  />
                </span>
                <input type="submit" value="X" readOnly onClick={removeProduct(index)}/>
                <span className="p-card__price">{price} zł</span>
              </div>
            </div>
          </div>
        </div>
      ))}

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

import React, { useState } from "react";

import CloseIcon from "../../assets/icons/Close";

const initialProducts = [
  {
    name: "Bourbon BBQ Grander Box",
    price: 31.95,
    quantity: 2
  },
  {
    name: "Chicken Cinger",
    price: 23.32,
    quantity: 3
  }
];

export default function Sidebebar() {
  const [products, setProducts] = useState(initialProducts);

  const sum = products.length
    ? products
        .map(({ price, quantity }) => price * quantity)
        .reduce((x, y) => x + y)
        .toFixed(2)
    : 0;

  const lowerProductQuantity = index => () => {
    const updatedProducts = [...products];

    if (updatedProducts[index].quantity <= 0) return;

    updatedProducts[index].quantity -= 1;

    setProducts(updatedProducts);
  };

  const increaseProductQuantity = index => () => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;

    setProducts(updatedProducts);
  };

  const removeProduct = index => () => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);

    setProducts(updatedProducts);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">Current Order</h2>

      {products.map(({ name, quantity, price }, index) => (
        <div className="sidebar__basket" key={name}>
          <div className="p-listing -border-bottom">
            <img
              className="p-listing__thumbnail"
              src="https://placehold.it/100x100"
              alt="Product Thumbnail"
            />
            <div className="p-listing__content">
              <div className="p-listing__heading-wrapper">
                <h2 className="p-listing__heading">{name}</h2>

                <button
                  value="X"
                  className="p-listing__remove"
                  onClick={removeProduct(index)}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="p-listing__footer">
                <span className="p-listing__quantity">
                  <input
                    type="submit"
                    value="-"
                    readOnly
                    onClick={lowerProductQuantity(index)}
                  />

                  <input type="text" value={quantity} disabled readOnly />

                  <input
                    type="submit"
                    value="+"
                    readOnly
                    onClick={increaseProductQuantity(index)}
                  />
                </span>

                <span className="p-listing__price">{price} zł</span>
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
          <button className="btn -block">Complete Order</button>
        </div>
      </div>
    </div>
  );
}

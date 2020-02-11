import React from "react";

import IconPlus from "../../assets/icons/Plus";

const ProductListing = ({ product }) => {
  const { name, thumbnailUrl, price } = product;

  const productPrice = `${price} zł`;

  return (
    <div key={name} className="p-listing -rounded">
      <img
        className="p-listing__thumbnail"
        src={thumbnailUrl}
        alt="Product Thumbnail"
      />

      <div className="p-listing__content -with-actions">
        <div className="p-listing__details">
          <h2 className="p-listing__heading">{name}</h2>

          <div className="p-listing__footer">
            <span className="p-listing__quantity">
              <input type="submit" value="-" readOnly />

              <input type="text" value="1" readOnly />

              <input type="submit" value="+" readOnly />
            </span>
            <span className="p-listing__price">{productPrice}</span>
          </div>
        </div>
        <div className="p-listing__actions">
          <button className="p-listing__actions-button -icon">
            <IconPlus /> Add
          </button>

          <button className="p-listing__actions-button -secondary">
            Customize
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

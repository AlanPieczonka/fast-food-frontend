import React from "react";

import { Link } from "react-router-dom";

const ProductCard = ({ name, thumbnailUrl, price, id, description }, index) => {
  const removeProduct = () => {};

  const onRemove = async () => {
    const res = await removeProduct({ variables: { id } });
  };

  return (
    <div key={name} className="p-card">
      <div className="p-card__toolbar">
        <Link
          to={`/management/edit/${id}`}
          className="p-card__toolbar-button --info"
        >
          Edit
        </Link>

        <button className="p-card__toolbar-button --danger" onClick={onRemove}>
          Remove
        </button>
      </div>

      <img
        className="p-card__thumbnail"
        src={thumbnailUrl}
        alt="Product Thumbnail"
      />

      <div className="p-card__content">
        <h2 className="p-card__heading">{name}</h2>

        <p className="p-card__description">{description}</p>

        <div className="p-card__footer">
          <span className="p-card__price">{price} zł</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

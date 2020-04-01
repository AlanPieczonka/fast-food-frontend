import React, { useState } from "react";

import ProductCard from "./ProductCard";
import IconPlus from "../../assets/icons/Plus";
import IconClose from "../../assets/icons/Close";
import { useModal } from "../../hooks/modal";
import Modal from "./Modal";

export default function ProductListing({
  product,
  showActions,
  quantity,
  onAdd,
  onRemove,
  onUpdateQuantity
}) {
  const { name, thumbnailUrl, quantityLimit, price } = product;

  const productPrice = `${price} zł`;

  const [localQuantity, setLocalQuantity] = useState(1);

  const { isOpen, openModal, closeModal } = useModal();

  const updateProductQuantity = newQuantity => () => {
    if (newQuantity <= 0) {
      return;
    }

    if (newQuantity >= quantityLimit) {
      return;
    }

    return setQuantity(newQuantity);
  };

  const setQuantity = quantity => {
    if (onUpdateQuantity) {
      onUpdateQuantity(quantity);
    }

    setLocalQuantity(quantity);
  };

  const productQuantity = quantity !== undefined ? quantity : localQuantity;

  return (
    <div key={name} className="p-listing -rounded -hidden">
      <img
        className="p-listing__thumbnail "
        src={thumbnailUrl}
        alt="Product Thumbnail"
        onClick={openModal}
      />

      <div className="p-listing__content -with-actions">
        <div className="p-listing__details">
          <div className="p-listing__heading-wrapper">
            <h2 className="p-listing__heading">{name}</h2>

            {onRemove && (
              <button className="p-listing__remove" onClick={onRemove}>
                <IconClose />
              </button>
            )}
          </div>

          <Modal
            Component={ProductCard}
            isOpen={isOpen}
            onRequestClose={closeModal}
            product={product}
          />
          <div className="p-listing__footer">
            <span className="p-listing__quantity">
              <input
                type="submit"
                value="-"
                onClick={updateProductQuantity(productQuantity - 1)}
                readOnly
              />

              <input type="text" value={productQuantity} readOnly />

              <input
                type="submit"
                value="+"
                onClick={updateProductQuantity(productQuantity + 1)}
                readOnly
              />
            </span>
            <span className="p-listing__price">{productPrice}</span>
          </div>
        </div>

        {onAdd && (
          <div className="p-listing__actions">
            <button
              onClick={onAdd(product, productQuantity)}
              className="p-listing__actions-button -icon"
            >
              <IconPlus /> Add
            </button>

            <button className="p-listing__actions-button -secondary" onClick={openModal}>
              Customize
            </button>
          </div>
        )}

        {onRemove && <div></div>}
      </div>
    </div>
  );
}

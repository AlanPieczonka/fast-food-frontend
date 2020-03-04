import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addProduct } from "../../actionCreators/order";
import ProductCard from "./ProductCard";
import IconPlus from "../../assets/icons/Plus";
import { useModal } from '../../hooks/modal';
import CustomModal from './CustomModal'

export default function ProductListing({ product }) {
  const { name, thumbnail_url: thumbnailUrl, price } = product;

  const productPrice = `${price} zł`;

  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const { isOpen, openModal, closeModal } = useModal()

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
          <h2 className="p-listing__heading">{name}</h2>
          <CustomModal
            Component={ProductCard}
            isOpen={isOpen}
            onRequestClose={closeModal}
            product={product}
          />            
          <div className="p-listing__footer">
            <span className="p-listing__quantity">
              <input type="submit" value="-" onClick={() => setQuantity(quantity - 1 > 1 ? quantity - 1 : 1)} readOnly />

              <input type="text" value={quantity} readOnly />

              <input type="submit" value="+" onClick={() => setQuantity(quantity + 1 < 10 ? quantity + 1 : 10)} readOnly />
            </span>
            <span className="p-listing__price">{productPrice}</span>
          </div>
        </div>
        <div className="p-listing__actions">
          <button onClick={() => dispatch(addProduct({
            productId: product.id,
            quantity
          }))} className="p-listing__actions-button -icon">
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
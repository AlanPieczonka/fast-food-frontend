import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PaymentForm from "../reusable/PaymentForm";
import ProductListing from "../reusable/ProductListing";
import Modal from "../reusable/Modal";
import { getOrdersArray } from "../../selectors";
import {
  removeProduct,
  updateProductQuantity
} from "../../actionCreators/order";
import { useModal } from "../../hooks/modal";
import { calculateSum } from "./../../utils/order";

export default function Sidebar() {
  const order = getOrdersArray(useSelector(state => state));

  const dispatch = useDispatch();

  const sum = calculateSum(order);

  const { isOpen, openModal, closeModal } = useModal();

  const updateQuantity = index => newQuantity =>
    dispatch(updateProductQuantity(index, newQuantity));

  const remove = index => () => dispatch(removeProduct(index));

  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">Current Order</h2>

      {order.map((product, index) => (
        <div className="sidebar__basket" key={product.tempId}>
          <ProductListing
            product={product}
            quantity={product.quantity}
            onUpdateQuantity={updateQuantity(index)}
            onRemove={remove(index)}
          />
        </div>
      ))}

      <div className="sidebar__footer">
        <div className="sidebar__summary">
          <span>Sum:</span>
          <span>{sum} zł</span>
        </div>

        <div className="sidebar__submit">
          <button
            className={`btn -block ${sum === 0 ? "-disabled" : ""}`}
            disabled={sum === 0}
            onClick={openModal}
          >
            Complete Order
          </button>

          <Modal
            Component={PaymentForm}
            isOpen={isOpen}
            onRequestClose={closeModal}
            closeModal={closeModal}
            order={order}
          />
        </div>
      </div>
    </div>
  );
}

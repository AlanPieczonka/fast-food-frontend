import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PaymentForm from "../reusable/PaymentForm";

import IconClose from "../../assets/icons/Close";
import { getOrdersArray } from "../../selectors";
import {
  removeProduct,
  updateProductQuantity
} from "../../actionCreators/order";
import { useModal } from "../../hooks/modal";
import { calculateSum } from "./../../utils/order";
import Modal from "../reusable/Modal";

export default function Sidebar() {
  const order = getOrdersArray(useSelector(state => state));

  const dispatch = useDispatch();

  const sum = calculateSum(order);

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">Current Order</h2>
      {order.map(({ tempId, name, quantity, price, thumbnailUrl }, index) => (
        <div className="sidebar__basket" key={tempId}>
          <div className="p-listing -rounded">
            <img
              className="p-listing__thumbnail"
              src={thumbnailUrl}
              alt={name}
            />
            <div className="p-listing__content">
              <div className="p-listing__details">
                <div className="p-listing__heading-wrapper">
                  <h2 className="p-listing__heading">{name}</h2>

                  <button
                    value="X"
                    className="p-listing__remove"
                    onClick={() => dispatch(removeProduct(index))}
                  >
                    <IconClose />
                  </button>
                </div>
                <div className="p-listing__footer">
                  <span className="p-listing__quantity">
                    <input
                      type="submit"
                      value="-"
                      readOnly
                      onClick={() =>
                        dispatch(
                          updateProductQuantity(
                            index,
                            quantity - 1 > 0 ? quantity - 1 : 1
                          )
                        )
                      }
                    />

                    <input type="text" value={quantity} disabled readOnly />

                    <input
                      type="submit"
                      value="+"
                      readOnly
                      onClick={() =>
                        dispatch(
                          updateProductQuantity(
                            index,
                            quantity + 1 < 11 ? quantity + 1 : 10
                          )
                        )
                      }
                    />
                  </span>

                  <span className="p-listing__price">{price} zł</span>
                </div>
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

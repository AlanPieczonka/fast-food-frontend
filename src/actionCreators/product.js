import * as types from "../types";

import api from "../api";
import { deserialize } from "../serializers/product";

export const fetchProducts = () => async dispatch => {
  const response = await api("/products");

  const products = await deserialize(response);

  const productsById = products.reduce(
    (acc, cur) => (acc = { ...acc, [cur.id]: cur }),
    {}
  );

  dispatch({
    type: types.FETCH_PRODUCTS,
    payload: productsById
  });
};

export const createProduct = (product) => async dispatch => {
  await new Promise(resolve => setTimeout(resolve, 500))

  dispatch({
    type: types.CREATE_PRODUCT,
    payload: product
  })
}

export const updateProduct = (id, changes) => async dispatch => {
  await new Promise(resolve => setTimeout(resolve, 500))

  dispatch({
    type: types.UPDATE_PRODUCT,
    payload: { id, changes }
  })
}

export const deleteProduct = (id) => async dispatch => {
  await new Promise(resolve => setTimeout(resolve, 500))

  dispatch({
    type: types.DELETE_PRODUCT,
    payload: { id }
  })
}
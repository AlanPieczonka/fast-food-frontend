import * as types from "../types";

import api from "../api";
import { serialize, deserialize } from "../serializers/product";

export const fetchProducts = () => async (dispatch) => {
  const response = await api("/products");

  if (!response) {
    return;
  }

  const products = await deserialize(response);

  const productsById = products.reduce(
    (acc, cur) => (acc = { ...acc, [cur.id]: cur }),
    {}
  );

  dispatch({
    type: types.FETCH_PRODUCTS,
    payload: productsById,
  });
};

export const createProduct = (product) => async (dispatch) => {
  const serializedProduct = await serialize(product);

  const response = await api("/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json",
    },
    body: JSON.stringify(serializedProduct),
  });

  const savedProduct = await deserialize(response);

  dispatch({
    type: types.CREATE_PRODUCT,
    payload: { product: savedProduct },
  });
};

export const updateProduct = (id, changes) => async (dispatch) => {
  const serializedProduct = await serialize({
    ...changes,
    id,
  });

  const response = await api(`/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json",
    },
    body: JSON.stringify(serializedProduct),
  });

  const deserializedProduct = await deserialize(response);

  dispatch({
    type: types.UPDATE_PRODUCT,
    payload: { id, product: deserializedProduct },
  });
};

export const updateProductLocally = (id, changes) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_PRODUCT,
    payload: { id, product: changes },
  });
};

export const deleteProduct = (id) => async (dispatch) => {
  await api(`/products/${id}`, {
    method: "DELETE",
  });

  dispatch({
    type: types.DELETE_PRODUCT,
    payload: { id },
  });
};

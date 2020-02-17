import * as types from "../types";

import api from "../api";

export const fetchProducts = () => async dispatch => {
  const products = await api("/products");

  const productsById = products.data.reduce(
    (acc, cur) => (acc = { ...acc, [cur.id]: cur }),
    {}
  );

  dispatch({
    type: types.FETCH_PRODUCTS,
    payload: productsById
  });
};

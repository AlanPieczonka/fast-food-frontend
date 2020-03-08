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

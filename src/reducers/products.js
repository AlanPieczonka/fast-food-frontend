import { FETCH_PRODUCTS, UPDATE_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT } from "../types";

const initialState = {
  byId: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        byId: action.payload
      }
    }
    case CREATE_PRODUCT: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.product.id]: action.payload.product
        }
      }
    }
    case UPDATE_PRODUCT: {
      const products = { ...state }
      products.byId[action.payload.id] = {
        ...products.byId[action.payload.id],
        ...action.payload.product
      }

      return products
    }
    case DELETE_PRODUCT: {
      const products = { ...state }
      delete products.byId[action.payload.id]

      return products
    }
    default:
      return state;
  }
}

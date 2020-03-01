import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY, SAVE_ORDER } from "../types";

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
          ...state,
          action.payload
      ]
    case REMOVE_PRODUCT:
      return state.filter((product, index) => {
        return index !== action.payload.index
      })
    case INCREASE_PRODUCT_QUANTITY:
      return state.map((product, index) => {
        return index === action.payload.index ? { 
          ...product,
          quantity: product.quantity + 1 <= 10 ? product.quantity + 1 : 10
         } : product
      })
    case DECREASE_PRODUCT_QUANTITY:
      return state.map((product, index) => {
        return index === action.payload.index ? { 
          ...product,
          quantity: product.quantity - 1 >= 1 ? product.quantity - 1 : 1
         } : product
      })
    case SAVE_ORDER:
      return initialState
    default:
      return state;
  }
}

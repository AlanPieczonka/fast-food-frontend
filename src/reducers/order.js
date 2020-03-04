import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT_QUANTITY, SAVE_ORDER } from "../types";

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
    case UPDATE_PRODUCT_QUANTITY: {
      const newOrders = [...state]
      newOrders[action.payload.index].quantity = action.payload.quantity

      return newOrders
    }     
    case SAVE_ORDER:
      return initialState
    default:
      return state;
  }
}

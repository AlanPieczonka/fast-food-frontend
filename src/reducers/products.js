import { FETCH_PRODUCTS } from '../types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { 
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}

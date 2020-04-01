import { FETCH_PRODUCTS, UPDATE_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT } from "../types";
import difference from 'lodash.difference'
import omit from 'lodash.omit'

const initialState = {
  byId: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: { 
      const currentKeys = Object.keys(state.byId)
      const payloadKeys = Object.keys(action.payload)

      return {
        byId: {
          ...(currentKeys.length ? omit(action.payload, difference(payloadKeys, currentKeys)) : action.payload), // IMPORTANT: remove this gimmick when api works
          ...state.byId
        }
      }
    }
    case CREATE_PRODUCT: 
      return {
        ...state,
        byId: {
          ...state.byId,
          [Math.max(...Object.keys(state.byId).map(id => parseInt(id))) + 1]: {
            id: Math.max(...Object.keys(state.byId).map(id => parseInt(id))) + 1,
            quantityLimit: 100,
            links: {
              self: ''
            },
            ...action.payload,
          }
        }
      }
    case UPDATE_PRODUCT: {
      const products = {...state}
      products.byId[action.payload.id] = {
        ...products.byId[action.payload.id],
        ...action.payload.changes
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

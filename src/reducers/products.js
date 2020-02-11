import { FETCH_PRODUCTS } from "../types";

const initialState = {
  byId: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        byId: action.payload
      };
    default:
      return state;
  }
}

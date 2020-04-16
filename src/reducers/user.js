import { SET_USER_THEME } from "../types";

const initialState = {
  theme: 'light'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}

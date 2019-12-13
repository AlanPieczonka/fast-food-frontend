import { SET_USER_THEME } from "../types";

const theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";

const initialState = {
  theme
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

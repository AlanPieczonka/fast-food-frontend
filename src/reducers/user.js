import { TOGGLE_USER_THEME } from "../types";

const theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";

const initialState = {
  theme
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_USER_THEME: {
      const theme = state.theme === "dark" ? "light" : "dark";

      return {
        ...state,
        theme
      };
    }
    default:
      return state;
  }
}

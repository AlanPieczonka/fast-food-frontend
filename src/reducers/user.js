import { TOGGLE_USER_THEME } from "../types";

const initialState = {
  theme: "dark"
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

import * as types from "../types";

export const setUserTheme = theme => {
  return {
    type: types.SET_USER_THEME,
    payload: theme
  };
};

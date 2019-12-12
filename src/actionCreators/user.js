import * as types from "../types";

export const toggleUserTheme = () => {
  const userTheme = localStorage.getItem("theme");
  const action = {
    type: types.TOGGLE_USER_THEME
  };

  if (userTheme && userTheme === "light") {
    localStorage.setItem("theme", "dark");

    return action;
  }

  localStorage.setItem("theme", "light");

  return action;
};

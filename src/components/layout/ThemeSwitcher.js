import React from "react";

import { connect } from "react-redux";

import { setUserTheme } from "../../actionCreators/user";
import DarkModeIcon from "./DarkModeIcon";

const ThemeSwitcher = ({ setUserTheme, theme }) => {
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  const setTheme = theme => () => setUserTheme(nextTheme);

  return (
    <div className="navbar__switch" onClick={setTheme(theme)}>
      <DarkModeIcon isToggled={isDark} />
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.user.theme
});

const mapDispatchToProps = {
  setUserTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);

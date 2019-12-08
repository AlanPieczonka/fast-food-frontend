import React from "react";

import { connect } from "react-redux";

import { toggleUserTheme } from "../../actionCreators/user";
import DarkModeIcon from "./DarkModeIcon";

const ThemeSwitcher = ({ toggleUserTheme, theme }) => {
  return (
    <div className="navbar__switch" onClick={toggleUserTheme}>
      <DarkModeIcon isToggled={theme === "dark"} />
    </div>
  );
};

const mapStateToProps = state => ({
  theme: state.user.theme
});

const mapDispatchToProps = {
  toggleUserTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);

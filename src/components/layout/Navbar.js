import React, { Component } from "react";
import BurgerIcon from "./BurgerIcon";
import ButtonGroup from "./ButtonGroup";
import OrganizationLogo from "./OrganizationLogo";
import ThemeSwitcher from "./ThemeSwitcher";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <BurgerIcon />

        <ButtonGroup />

        <div className="navbar__right">
          <ThemeSwitcher />

          <OrganizationLogo />
        </div>
      </nav>
    );
  }
}

import React from "react";
import { useSelector } from "react-redux";

import BurgerIcon from "../../assets/icons/Burger";
import ButtonGroup from "./ButtonGroup";
import OrganizationLogo from "./OrganizationLogo";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const { logo } = useSelector(({ organization }) => organization)

  return (
    <nav className="navbar">
      <BurgerIcon />

      <ButtonGroup />

      <div className="navbar__right">
        <ThemeSwitcher />

        <OrganizationLogo src={logo} />
      </div>
    </nav>
  );
}

export default Navbar
import React from "react";
import { useSelector } from "react-redux";

import { useAuth0 } from "../../api/auth/auth0";

import BurgerIcon from "../../assets/icons/Burger";
import ButtonGroup from "./ButtonGroup";
import OrganizationLogo from "./OrganizationLogo";
import ThemeSwitcher from "./ThemeSwitcher";

import Logout from "../../assets/icons/Logout";

const Navbar = () => {
  const { logo } = useSelector(({ organization }) => organization);

  const { isAuthenticated, logout, getTokenSilently } = useAuth0();
  const logOut = () => logout();

  return (
    <nav className="navbar">
      <BurgerIcon />

      <ButtonGroup />

      <div className="navbar__right">
        <ThemeSwitcher />

        <OrganizationLogo src={logo} />

        <Logout
          onClick={logOut}
          className="svg -primary -button ml-3"
          role="button"
        />
      </div>
    </nav>
  );
};

export default Navbar;

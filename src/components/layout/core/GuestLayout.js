import React from "react";

import { useAuth0 } from "../../../api/auth/auth0";

import loginImage from "../../../assets/images/login.jpg";

export const GuestLayout = ({ children }) => (
  <>
    <img src={loginImage} className="login__background" />

    <div className="login__content">{children}</div>
  </>
);

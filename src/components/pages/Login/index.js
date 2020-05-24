import React from "react";
import { Switch, Route } from "react-router-dom";

import { useAuth0 } from "../../../api/auth/auth0";

export default () => {
  const { loading, loginWithPopup } = useAuth0();

  const logIn = () => loginWithPopup();

  return (
    <div className="login__wrapper">
      <h1 className="m-3">Fast Food App</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="login__sub-heading">Log in to the user panel</p>

          <button className="btn" onClick={logIn}>
            Log in
          </button>
        </>
      )}
    </div>
  );
};

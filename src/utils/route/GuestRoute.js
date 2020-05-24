import React from "react";

import { Route, Redirect, useHistory } from "react-router-dom";
import { get } from "lodash";

import { useAuth0 } from "../../api/auth/auth0";

const GuestRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  const history = useHistory();

  if (isAuthenticated) {
    const path = get(history, "location.state.from.pathname", "/");

    return <Redirect to={path} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...rest} {...props} />;
        </Layout>
      )}
    />
  );
};

export default GuestRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "../../api/auth/auth0";

const ProtectedRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...rest} {...props}>
          {isAuthenticated ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )}
        </Layout>
      )}
    />
  );
};

export default ProtectedRoute;

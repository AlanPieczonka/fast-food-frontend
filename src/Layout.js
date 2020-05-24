import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useAuth0 } from "./api/auth/auth0";
import Navbar from "./components/layout/Navbar";
import Checkout from "./components/pages/Checkout";
import Management from "./components/pages/Management";
import Orders from "./components/pages/Orders";
import ProductUpdated from "./components/notifications/ProductUpdated";
import Login from "./components/pages/Login";
import withTheme from "./hocs/withTheme";

import { GuestRoute, ProtectedRoute } from "./utils/route";
import { GuestLayout, DashboardLayout } from "./components/layout/core";
import history from "./utils/history";

import "react-toastify/dist/ReactToastify.min.css";

import useChannel from "./hooks/websockets";
import { updateProductLocally } from "./actionCreators/product";

const Layout = () => {
  const { isAuthenticated } = useAuth0();

  const updateVh = () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const dispatch = useDispatch();
  useChannel("product:update", (event, payload) => {
    if (event === "product_updated") {
      dispatch(updateProductLocally(parseInt(payload.id), payload.attributes));
      toast(() => (
        <ProductUpdated id={payload.id} attributes={payload.attributes} />
      ));
    }
  });

  useEffect(() => {
    updateVh();

    const resizeListener = window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <Switch>
      <GuestRoute path="/login" component={Login} layout={GuestLayout} />

      <ProtectedRoute
        path="/orders"
        component={Orders}
        layout={DashboardLayout}
      />

      <ProtectedRoute
        path="/management"
        component={Management}
        layout={DashboardLayout}
      />

      <ProtectedRoute path="/" component={Checkout} layout={DashboardLayout} />
    </Switch>
  );
};

export default withTheme(Layout);

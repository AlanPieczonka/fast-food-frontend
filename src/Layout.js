import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Navbar from "./components/layout/Navbar";
import Checkout from "./components/pages/Checkout";
import Management from "./components/pages/Management";
import Orders from "./components/pages/Orders";
import ProductUpdated from "./components/notifications/ProductUpdated";
import withTheme from "./hocs/withTheme";

import 'react-toastify/dist/ReactToastify.min.css';

import useChannel from "./hooks/websockets";
import { updateProductLocally } from "./actionCreators/product"

const Layout = () => {
  const updateVh = () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const dispatch = useDispatch();
  useChannel('product:update', (event, payload) => {
    if (event === "product_updated") {
      dispatch(updateProductLocally(parseInt(payload.id), payload.attributes))
      toast(() => <ProductUpdated id={payload.id} attributes={payload.attributes} />)
    }
  })

  useEffect(() => {
    updateVh();

    const resizeListener = window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", resizeListener);
    }
  }, [])

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/orders" component={Orders} />
        <Route path="/management" component={Management} />
        <Route path="/" component={Checkout} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default withTheme(Layout);

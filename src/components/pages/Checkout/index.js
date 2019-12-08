import React from "react";

import { Socket } from "phoenix";

import Sidebar from "../../layout/Sidebar";
import Content from "../../layout/Content";
import CheckoutProducts from "./CheckoutProducts";
import CheckoutNavigation from "./CheckoutNavigation";

export default () => {
  return (
    <>
      <Sidebar />

      <Content>
        <div className="checkout">
          <CheckoutNavigation />

          <CheckoutProducts />
        </div>
      </Content>
    </>
  );
};

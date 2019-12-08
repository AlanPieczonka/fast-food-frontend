import React from "react";

import { Socket } from "phoenix";

import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";
import ProductList from "../reusable/ProductList";

export default () => {
  return (
    <>
      <Sidebar />

      <Content>
        <div className="checkout">
          <div className="checkout__products">
            <ProductList />
          </div>
        </div>
      </Content>
    </>
  );
};

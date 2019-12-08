import React from "react";

import ProductListing from "../../reusable/ProductListing";

const CheckoutProducts = () => {
  const PRODUCTS_MAP = Array.from({ length: 30 }).map(item => (
    <ProductListing />
  ));

  return (
    <div className="checkout__products">
      <div className="grid -two">{PRODUCTS_MAP}</div>
    </div>
  );
};

export default CheckoutProducts;

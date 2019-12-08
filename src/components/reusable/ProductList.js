import React from "react";

import ProductCard from "./ProductCard";
import ProductListing from "./ProductListing";

const ProductList = ({ type = "checkout" }) => {
  const products = [];

  return (
    <div className="products-list">
      {products.map(product => {
        return {
          checkout: <ProductListing {...product} />,
          management: <ProductCard {...product} />
        }[type];
      })}
    </div>
  );
};

export default ProductList;

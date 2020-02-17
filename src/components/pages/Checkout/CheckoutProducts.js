import React, { useEffect } from "react";

import { connect } from "react-redux";

import ProductListing from "../../reusable/ProductListing";
import { fetchProducts } from "../../../actionCreators/product";
import { getProductsArray } from "../../../selectors";

const CheckoutProducts = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const PRODUCTS_MAP = products.map((product, index) => (
    <ProductListing key={product.id} product={product} />
  ));

  return (
    <div className="checkout__products">
      <div className="grid -two">{PRODUCTS_MAP}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: getProductsArray(state.products.byId),
  productsById: state.products.byId
});

const mapDispatchToProps = { fetchProducts };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProducts);

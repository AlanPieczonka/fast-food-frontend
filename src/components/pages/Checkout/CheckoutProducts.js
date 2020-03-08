import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";

import { addProduct } from "../../../actionCreators/order";
import ProductListing from "../../reusable/ProductListing";
import { fetchProducts } from "../../../actionCreators/product";
import { getProductsArray } from "../../../selectors";

const CheckoutProducts = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const dispatch = useDispatch();

  const addProductToOrder = (product, quantity) => () =>
    dispatch(addProduct(product, quantity));

  const PRODUCTS_MAP = products.map((product, index) => (
    <ProductListing
      key={product.id}
      product={product}
      onAdd={addProductToOrder}
    />
  ));

  return (
    <div className="checkout__products">
      <div className="grid -two">{PRODUCTS_MAP}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: getProductsArray(state.products.byId)
});

const mapDispatchToProps = { fetchProducts };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProducts);

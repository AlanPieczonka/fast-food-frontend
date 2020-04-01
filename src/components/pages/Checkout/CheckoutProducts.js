import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addProduct } from "../../../actionCreators/order";
import { fetchProducts } from "../../../actionCreators/product";
import { getActiveProductsArray } from "../../../selectors";

import ProductListing from "../../reusable/ProductListing";

const CheckoutProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  const products = useSelector(({ products: { byId }}) => getActiveProductsArray(byId))

  const addProductToOrder = (product, quantity) => () =>
    dispatch(addProduct(product, quantity));

  const PRODUCTS_MAP = products.map((product) => (
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

export default CheckoutProducts

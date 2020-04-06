import React from "react";

import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Modal from './../../reusable/Modal'
import ProductForm from "../../reusable/ProductForm";

const ProductEdit = ({
  match: {
    params: { id }
  },
  products
}) => {
  return (
    <>
      <div className="management__toolbar">
        <Link to="/management/products" className="management__toolbar-button">
          Cancel
        </Link>
      </div>

      <div className="management__products">
        <ProductForm initialValues={products.byId[id]} isEditing />
      </div>
    </>
  );
};

const ProductEditModal = (props) => {
  const products = useSelector(({ products }) => products)

  return (
    <Modal Component={ProductEdit} isOpen={true} products={products} {...props} />
  )
}

export default withRouter(ProductEditModal)
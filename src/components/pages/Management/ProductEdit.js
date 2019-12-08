import React from "react";

import { withRouter, Link } from "react-router-dom";

import ProductForm from "../../reusable/ProductForm";

const ProductEdit = ({
  match: {
    params: { id }
  }
}) => {
  return (
    <>
      <div className="management__toolbar">
        <Link to="/management" className="management__toolbar-button">
          Cancel
        </Link>
      </div>

      <div className="management__products">
        <ProductForm initialValues={{}} isEditing />
      </div>
    </>
  );
};

export default withRouter(ProductEdit);

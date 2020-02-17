import React from "react";

import { Link } from "react-router-dom";

const ProductList = () => (
  <>
    <div className="management__toolbar">
      <div className="btn__group -end">
        <Link to="/management/new" className="btn -outline -sm">
          New product
        </Link>
      </div>
    </div>

    <div className="management__products">
      List of products in management page
    </div>
  </>
);

export default ProductList;

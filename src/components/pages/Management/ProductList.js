import React from "react";

import { Link } from "react-router-dom";
import List from "../../reusable/ProductList";

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
      <List type="management" />
    </div>
  </>
);

export default ProductList;
import React from 'react'

import { Link } from 'react-router-dom'
import ProductForm from '../../reusable/ProductForm'

const ProductCreate = () => (
  <>
    <div className="management__toolbar">
      <Link to="/management/products" className="management__toolbar-button">
        Cancel
      </Link>
    </div>

    <div className="management__products">
      <ProductForm />
    </div>
  </>
)

export default ProductCreate

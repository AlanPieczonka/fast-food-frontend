import React from 'react'

import { Link } from 'react-router-dom'
import List from '../../reusable/ProductList'

const ProductList = () => (
  <>
    <div className="management__toolbar">
      <Link to="/management/new" className="management__toolbar-button">
        Add a new product
      </Link>
    </div>

    <div className="management__products">
      <List type="management" />
    </div>
  </>
)

export default ProductList

import React from 'react'

import Content from '../layout/Content'
import ProductsList from '../reusable/ProductsList'

const Management = () => (
  <Content>
    <div className="management">
      <div className="management__toolbar">
        <button className="management__toolbar-button">Add a new product</button>
      </div>

      <div className="management__products">
        <ProductsList type="management" />
      </div>
    </div>
  </Content>
)

export default Management

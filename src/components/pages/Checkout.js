import React from 'react'

import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import ProductsList from '../reusable/ProductsList'

export default () => (
  <>
    <Sidebar />
    
    <Content>
      <div className='checkout'>
        <div className='checkout__products'>
          <ProductsList />
        </div>
      </div>
    </Content>
  </>
)

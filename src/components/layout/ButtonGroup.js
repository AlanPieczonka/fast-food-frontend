import React from 'react'

import { NavLink } from 'react-router-dom'

export default function BurgerIcon() {
  const canAccessManagement = true

  return (
    <div className="navbar__button-group">
      <NavLink to='/' exact activeClassName="--active">
        Checkout
      </NavLink>

      <NavLink to='/orders/current' isActive={(_, location) => location.pathname.includes('orders')} activeClassName="--active">
        Orders
      </NavLink>

      <NavLink to='/management/products' isActive={(_, location) => location.pathname.includes('management')} className={`${!canAccessManagement && '--muted'}`} activeClassName="--active">
        Management
      </NavLink>
    </div>
  )
}

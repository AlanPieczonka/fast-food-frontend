import React from 'react'

export default function BurgerIcon() {
  return (
    <div className="navbar__button-group">
      <button className="--active">
        Checkout
      </button>

      <button>
        Orders
      </button>

      <button className="--muted">
        Management
      </button>
    </div>
  )
}

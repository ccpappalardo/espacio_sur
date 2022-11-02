import React from 'react'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  return (
    <NavLink to="/cart">
      <span className="material-symbols-outlined clase-carrito">shopping_cart</span>
    </NavLink>
  )
}

export default CartWidget
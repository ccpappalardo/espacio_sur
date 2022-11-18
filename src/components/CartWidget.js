import React from 'react' 
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { CartContext, totalUnidades } from '../context/CartContext'
 

const CartWidget = () => {

  const {totalUnidades} = useContext(CartContext);
  const total=totalUnidades();
  return (
    <NavLink to="/cart">
      <span className="material-symbols-outlined clase-carrito">shopping_cart</span>
      { total? (<span className='contadorCarrito'>{total}</span>) : ('') }   
      
    </NavLink>
  )
}

export default CartWidget
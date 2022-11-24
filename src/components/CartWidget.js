import React from 'react' 
import { useContext } from 'react';
import { NavLink } from 'react-router-dom' 
import { CartContext } from '../context/CartContext';
 

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext);
  return (
    <NavLink to="/cart">
      <span className="material-symbols-outlined clase-carrito">shopping_cart</span>
      { totalUnidades()? (<span className='contadorCarrito'>{totalUnidades()}</span>) : ('') }   
    </NavLink>
  )
}

export default CartWidget
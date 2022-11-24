import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartResume from '../CartResume';

const Cart = () => { 
  const { cart, deleteAll, totalPrecio } = useContext(CartContext); 

  if (cart.length === 0)
  return (
    <div className="contenedorLoader">
      <h3>
          Oops! Aún no hay productos en el carrito, volve al Inicio 
          <Link to="/"><span className="material-symbols-outlined">arrow_forward</span></Link>
      </h3>
    </div>
  );

  return (
      <div>
          <h1 className="brand">ESPACIO SUR </h1>
          <h2 className="titulo">Carrito de Compras</h2>          
          <CartResume />        

          <h3>Total: $ {totalPrecio()}</h3>        
          <div className="titulo">   
            <button className="btnVaciarCarrito" onClick={deleteAll}>Vaciar carrito</button>             
            <Link  className="btnIrAlCarrito" to="/checkout">Checkout</Link> 
          </div>
        
      </div>
  );
};

export default Cart
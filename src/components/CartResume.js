import React from 'react'
import { useContext } from 'react'; 
import { CartContext } from '../context/CartContext';

const CartResume = () => { 
    const { cart, deleteOne, priceWithDiscount} = useContext(CartContext); 

  return (
    <div className="container">
      <div>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => (
              <tr key={prod.id}>
                <th>
                  <img src={prod.img} alt={prod.title} width="100px" />
                </th>
                <td>{prod.title}</td>
                <td>
                  {priceWithDiscount(prod)}
                </td>
                <td>{prod.cantidad}</td>
                <td>${priceWithDiscount(prod) * prod.cantidad}.-</td>
                <td style={{textAlign:'center'}}>
                  <span onClick={() => deleteOne(prod.id)} style={{}} className={"material-symbols-outlined btnEliminarElementos"}>delete</span>
                </td>
              </tr>
            ))}
           
          </tbody>
        </table> 
      </div>
    </div>
  )
}
export default CartResume
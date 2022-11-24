import React from 'react' 
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const OrderDetail = ({order}) => {
    const { priceWithDiscount} = useContext(CartContext); 
  return (
    <div className="container">
      <div>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th> 
            </tr>
          </thead>
          <tbody>
          {order.map((prod) => (
                <tr key={prod.id} className="">
                <th>
                <img src={prod.img} alt={prod.title} width="80px" />
                </th>
                <td>{prod.title}</td>
                <td>{prod.cantidad}</td>
                <td>
                {priceWithDiscount(prod)}
                </td>         
                <td>${priceWithDiscount(prod) * prod.cantidad}.-</td>
            </tr>
            ))} 
          </tbody>
        </table> 
      </div>
    </div>
 
    

  )
}

export default OrderDetail
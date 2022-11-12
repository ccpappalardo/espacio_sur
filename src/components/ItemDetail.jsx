import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {
    
  let desc=(producto.price-(producto.price * producto.descuento) / 100);
  let estiloDescuento=(producto.modalidad==="presencial")? "descuentoPresencial" : "descuentoOnline";
  
  const {addToCart} = useContext(CartContext);
 

  const onAdd = (cantidad) => {
      console.log(`Agregaste ${cantidad} productos al carrito!`);
      addToCart(producto,cantidad);
      { /* <div className="info">{cantidad === 0 ? <p></p> : <p>Se agregaron {cantidad} productos</p>}</div> */}
  };


    return ( 
      <div className="item">
            <div >
              <img src={producto.img} width="220px" alt={producto.title} />
              </div>
              <article className="info">
                  <h2>{producto.title}</h2>
                  {
                      producto.descuento!=="0"?<h4 className={`${estiloDescuento}`}>{producto.descuento}% off</h4> : ''
                  }
                    {
                      producto.modalidad==="presencial"?
                      <h4 className="modalidadPresencial"># {producto.modalidad}</h4>
                      : <h4 className="modalidadOnline"># {producto.modalidad}</h4>
                  }
                  <h3>Cupos: {producto.cupo}</h3>
                  <div className="info-price">
                      <h3>${desc}.-</h3>
                      {
                          producto.descuento!=="0"? <h5>${producto.price}.-</h5> :''
                      }
                  </div>
              </article>
              <div className="info">{producto.descripcion}</div>
              <ItemCount stock={producto.cupo} onAdd={onAdd}/>
              
              <Link to="/Cart">Terminar Compra</Link>
      </div>
    )
}

export default ItemDetail
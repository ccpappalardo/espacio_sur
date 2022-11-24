import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({producto}) => {
    
  const {addToCart,priceWithDiscount} = useContext(CartContext);
  let desc=priceWithDiscount(producto);
  let estiloDescuento=(producto.modalidad==="presencial")? "descuentoPresencial" : "descuentoOnline";


  const onAdd = (cantidad) => {
      addToCart(producto,cantidad);
      showToastMessage();
  };

  const showToastMessage = () => {
    toast('Has agregado un producto al carrito!', {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  
    return ( 
      <div className="item">
            <div >
              {
                producto.modalidad==="presencial"?
                <h4 className="modalidadPresencial"># {producto.modalidad}</h4>
                : <h4 className="modalidadOnline"># {producto.modalidad}</h4>
              }
              <h2>{producto.title}</h2>
              <div>
                {
                  producto.descuento!==0?<h4 className={`${estiloDescuento}`}>{producto.descuento}% off</h4> : ''
                }
                <img src={producto.img} width="600px" alt={producto.title} />
              </div>
              </div>
              <article className="info">
               
                
                  
                  <h3>Cupos: {producto.cupo}</h3>
                  <div className="info-price">
                      <h3>${desc}.-</h3>
                      {
                          producto.descuento!==0? <h5>${producto.price}.-</h5> :''
                      }
                  </div>
              </article>
              <div className="info">{producto.descripcion}</div>
             
              <ItemCount stock={producto.cupo} onAdd={onAdd}/>
              <div className="titulo">                
                  <Link  className="btnIrAlCarrito" to="/cart">Ir al carrito </Link> 
              </div>
              <ToastContainer />
      </div>
    )
}

export default ItemDetail
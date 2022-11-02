import React, { useState } from 'react' 
const ItemCount = (props) => {

    const {stock, initial,onAdd}=props;
    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } 
    };
    const reset = () => {
        setCantidad(0);
    };
    const restar=() =>{
        if (cantidad>1) {
            setCantidad(cantidad-1);  
        }
    };    
    const agregar= () =>onAdd(cantidad);
 
  return (
    <div className="elementos-centrados">
        <button className="btnOperacion" disabled={cantidad === 0} onClick={restar}>-</button>
            <span className="text-input">{cantidad}</span>
        <button  className="btnOperacion"  disabled={cantidad === stock} onClick={sumar}>+</button>
        <button  className="btnPrimary"  onClick={reset}>Borrar</button>
        <button  className="btnPrimary" disabled={cantidad===0} onClick={agregar}>Agregar Al Carrito</button>
    </div>
  )
}

export default ItemCount
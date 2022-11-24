import {doc, getDoc} from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'; 
import { ToastContainer } from 'react-toastify';
import { colleccionOrder } from '../services/firebaseConfig';
import OrderDetail from './OrderDetail';

export const Orders = () => {
    const [idOrden, setIdOrden] = useState('');
    const handleOrder = (e) => setIdOrden(e.target.value);

    const [ordenes, setOrdenes] = useState([]);
    const [cliente, setCliente] =useState([])
    const [loading, setLoading] = useState(false);
      
    const searchOrder = (e) => { 
     
        e.preventDefault();
        const ref = doc(colleccionOrder, idOrden);
        getDoc(ref)
            .then((res) => { 
                setOrdenes([...res.data().items]);
                console.log(res.data().buyer)
                setCliente(
                   { cliente: res.data().buyer}   
                )
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
            }) 
    }
    
if (ordenes.length>0) {

    return (
        <div> 
            <h2 className="brand">MIS PEDIDOS</h2>
            <h2 className="titulo"> El Detalle de tu Orden Id :  {idOrden}</h2>
            <h3>Cliente:  {cliente.cliente.name} {cliente.cliente.lastName}</h3>
            <h3>Estado: <span className="colorVioleta">En preparación</span></h3>
            <span>Nos contactaremos en las próximas 72 hs desde el día de tú compra.</span>
            <OrderDetail order={ordenes} />
        </div>
        ) 
}
    

if (loading==false) {
       
      return (
        <div className='container'>  
        <form action="" onSubmit={searchOrder}  className="titulo">
        <h2 className="brand">MIS PEDIDOS</h2>
        <h2 className="titulo">Buscar Orden</h2>
        <label> Ingresa el Número de Órden: </label>
            <input type="text"
                placeholder=""
                name="order"
                onChange={handleOrder}
                value={idOrden}
            />
            <button className='btnPrimary' disabled={idOrden==""} >Buscar</button>
        </form>
        </div>
      )
    }
}

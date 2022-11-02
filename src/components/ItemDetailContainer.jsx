import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../mock/productos';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const {idProducto}=useParams();
    
    const onAdd = (numero) => {
        console.log(`Agregaste ${numero} productos al carrito!`);
    };

      //Use State, para setear el estado del producto-
    const [item, setItem] = useState({});

    
  useEffect(() => {
    const getProduct = () => {
             
        const product = products.find(element => element.id===+idProducto);
 
        return new Promise((res, rej) => {
          /*Simulamos una promesa real con el set time out*/
            setTimeout(() => {
                res(product);
            }, 2000);
        });
    };  

    getProduct()
    //Resuelvo la promesa
        .then((res) => {
            setItem(res);
        })
    //Hago catch del error
        .catch((error) => {
            console.log(error);
        });
    }, [idProducto]);
    //Se pone un corchete vacío para que se ejecute una sola vez el useEffect
  
    return (
        <>
        <div id="container" className="item-detalle-contenedor">
          <h2>Detalle del Curso</h2>
          <ItemDetail producto={item} /> 
        </div>
         <ItemCount stock={10} initial={0} onAdd={onAdd}/>
         </>
        );
    };
export default ItemDetailContainer
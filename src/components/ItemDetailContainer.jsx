import {doc,getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { products } from '../mock/productos';
import { colleccionProd } from '../services/firebaseConfig';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const {idProducto}=useParams();
 
   
      //Use State, para setear el estado del producto-
    const [item, setItem] = useState({});

    
    useEffect(() => {
        const ref = doc(colleccionProd, idProducto);

        getDoc(ref)
            .then((res) => {
                //console.log(res);
                setItem({
                    id: res.id,
                    ...res.data(),
                });
        
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
              //  setLoading(false);
            });
        }, [idProducto]);
   /* const getProduct = () => {
             
        const product = products.find(element => element.id===+idProducto);
 
        return new Promise((res, rej) => {
          /*Simulamos una promesa real con el set time out
            setTimeout(() => {
                res(product);
            }, 2000);
        });
    };*/  
/*
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
    */
    //Se pone un corchete vacío para que se ejecute una sola vez el useEffect
   
    return (
        <>
        <div id="container" className="item-detalle-contenedor">
          <ItemDetail producto={item} /> 
        </div>
         </>
        );
    };
export default ItemDetailContainer
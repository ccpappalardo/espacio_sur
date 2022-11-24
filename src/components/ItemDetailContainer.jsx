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

    return (
        <>
            <div id="container" className="item-detalle-contenedor">
                 { <ItemDetail producto={item} /> }
            </div>
         </>
        );
    };
export default ItemDetailContainer
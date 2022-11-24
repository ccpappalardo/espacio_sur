import {doc,getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { colleccionProd } from '../services/firebaseConfig';
import ItemDetail from './ItemDetail';
import { HashLoader } from 'react-spinners';

const ItemDetailContainer = () => {

    const {idProducto}=useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true); 
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
                setLoading(false);
            });
            return () => setLoading(true);
        }, [idProducto]);

        
  if (loading) {
    return (
      <div className="contenedorLoader">
        <HashLoader color="#7736d6" />    
        </div>
    );
}
    return (
        <>
            <div id="container" className="item-detalle-contenedor">
                 { <ItemDetail producto={item} /> }
            </div>
         </>
        );
    };
export default ItemDetailContainer
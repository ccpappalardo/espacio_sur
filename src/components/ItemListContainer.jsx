import { getDocs, query, where} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { colleccionProd} from '../services/firebaseConfig';
import ItemList from './ItemList';
import { HashLoader } from 'react-spinners';

const ItemListContainer = ({}) => {
 
  const [loading, setLoading] = useState(true); 
  const [items, setItems] = useState([]); 
  const { nombreModalidad } = useParams();  

  useEffect(() => { 
    const ref = nombreModalidad
    ? query(colleccionProd, where('modalidad', '==', nombreModalidad))
    : colleccionProd;
 
    getDocs(ref)
    .then((res) => { 
        const products=res.docs.map((prod)=>{
          return {
            id:prod.id,
            ...prod.data(),
          }
          
        });
        setItems(products);
       
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
      setLoading(false);
  });
     return () => setLoading(true);
    }, [nombreModalidad]);  


    if (loading) {
          return (
            <div className="contenedorLoader">
              <HashLoader color="#7736d6" />    
              </div>
          );
      }

      return (
          <div id="container">
            <h1 className="brand">ESPACIO SUR </h1>
            <ItemList items={items} />
          </div>
          );
      };

export default ItemListContainer
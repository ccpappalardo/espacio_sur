import { collection, getDocs, query, where} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { colleccionProd} from '../services/firebaseConfig';
import ItemList from './ItemList';
import { HashLoader } from 'react-spinners';

const ItemListContainer = ({}) => {

     //constante para el loader
     const [loading, setLoading] = useState(true);
  //Use State, para setear el estado del item-
  const [items, setItems] = useState([]);

  const { nombreModalidad } = useParams(); 
//if catergoryname -> tal cosa, sino tal otra.


  useEffect(() => {

    //
    const ref = nombreModalidad
    ? query(colleccionProd, where('modalidad', '==', nombreModalidad))
    : colleccionProd;

   // const colleccionProd=collection(db,'cursos')

    //Retorna una promesa.
    getDocs(ref)
    .then((res) => {
        //setItems(res);c
      //  const q=query(colleccionProd, where('modalidad','===',nombreModalidad));
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
  /*  getProducts(nombreModalidad)
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [nombreModalidad]);*/
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
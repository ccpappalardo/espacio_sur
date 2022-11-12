import { collection, getDocs} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/productos';
import { colleccionProd, db} from '../services/firebaseConfig';
 
import ItemList from './ItemList';

const ItemListContainer = ({}) => {

  //Use State, para setear el estado del item-
  const [items, setItems] = useState([]);

  const { nombreModalidad } = useParams(); 
//if catergoryname -> tal cosa, sino tal otra.


  useEffect(() => {

   // const colleccionProd=collection(db,'cursos')

    //Retorna una promesa.
    getDocs(colleccionProd)
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
    });
}, [nombreModalidad]); 
  /*  getProducts(nombreModalidad)
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [nombreModalidad]);*/
 
      return (
          <div id="container">
            <h1 className="brand">ESPACIO SUR </h1>
            <ItemList items={items} />
          </div>
          );
      };

export default ItemListContainer
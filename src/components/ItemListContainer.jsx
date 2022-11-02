import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/productos';
import ItemList from './ItemList';

const ItemListContainer = ({}) => {

  //Use State, para setear el estado del item-
  const [items, setItems] = useState([]);

  const { nombreModalidad } = useParams(); 
  
  useEffect(() => {
    getProducts(nombreModalidad)
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
}, [nombreModalidad]);
 
      return (
          <div id="container">
            <h1 className="brand">ESPACIO SUR </h1>
            <ItemList items={items} />
          </div>
          );
      };

export default ItemListContainer
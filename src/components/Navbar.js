import React, { useEffect, useState } from 'react'
import iconoNav from '../images/sur_logo.png';
import CartWidget from '../components/CartWidget';
import {Link, NavLink} from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const Navbar = () => {

  const [modalidad, setModalidad] = useState([]);

  
  useEffect(() => {
    const modalidadCollection = collection(db, 'modalidades');
    getDocs(modalidadCollection)
        .then((res) => {
            const modalidades = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setModalidad(modalidades);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);


  return (
    <nav className="nav">        
            <div className="nav-links">
              <Link to="/">
              <img className="imagen-logo" src={iconoNav} alt="logo espacio sur"/> 
              </Link>
            </div>
            <ul> 
                <NavLink className="linkCursos" to="/">
                       Cursos
                </NavLink> 
                {
                modalidad.map((mod) => (
                    <NavLink  key={mod.id}  className="link" to={`/modalidad/${mod.path}`}>
                        {mod.titulo}
                  </NavLink>
                ))
                }
            </ul>
            <NavLink className="linkCursos" to="/orders/">
                       Mis Pedidos
            </NavLink> 
            <CartWidget/>
    </nav>
  )
}

export default Navbar
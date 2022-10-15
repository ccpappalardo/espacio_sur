import React from 'react'
import iconoNav from '../images/sur_logo.png';
import CartWidget from '../components/CartWidget';

const Navbar = () => {
  return (
    <nav className="nav">        
            <div className="nav-links">
              <img className="imagen-logo" src={iconoNav} alt="logo espacio sur"/> 
            </div>
            <div className="nav-links">Cursos</div>
            <div className="nav-links">Contacto</div>
            <div className="nav-links">Instagram</div>
            <CartWidget/>
    </nav>
  )
}

export default Navbar
import React from 'react'
import iconoNav from '../images/sur_logo.png';
import CartWidget from '../components/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">        
            <div className="nav-links">
              <Link to="/">
              <img className="imagen-logo" src={iconoNav} alt="logo espacio sur"/> 
              </Link>
            </div>
            <div className="nav-links"><Link className="link"  to="/">Cursos</Link></div>
            <div className="nav-links"><NavLink className="link"  to="/modalidad/online">Online</NavLink></div>
            <div className="nav-links"><NavLink className="link" to="/modalidad/presencial">Presencial</NavLink></div>
            <div className="nav-links"><NavLink className="link" to="/contacto" >Contacto</NavLink></div>
            <div className="nav-links"><NavLink className="link" to="/instagram">Instagram</NavLink></div>
            <CartWidget/>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>MagicGaming</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/medias">CPUs y GPUs</Link></li>
            <li><Link className="menu-link" to="/productos/pantalones">Componentes</Link></li>
            <li><Link className="menu-link" to="/productos/remeras">Accesorios</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar
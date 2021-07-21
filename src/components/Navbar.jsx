import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';
import '../styles/components/Navbar.scss';

const Navbar = () => (
<nav className="Navbar">
    <a href="/"><img src={Logo} alt="Logo"/></a>
    <ul>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/quienessomos">¿QUIENES SOMOS?</Link></li>
        <li><Link to="/ministerios">MINISTERIOS</Link></li>
        <li><Link to="/servicios">SERVICIOS</Link></li>
        <li><Link to="/citadeldia">CITA DEL DÍA</Link></li>
        <li><Link to="/contactanos">CONTÁCTANOS</Link></li>
    </ul>
    <a className="Navbar__live" href="#">LIVE</a>
</nav>
);

export default Navbar;

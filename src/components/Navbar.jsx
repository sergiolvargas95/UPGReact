import React from 'react';

import Logo from '../assets/images/Logo.png';
import '../styles/components/Navbar.scss';

const Navbar = () => (
<nav className="Navbar">
    <a href="/"><img src={Logo} alt="Logo"/></a>
    <ul>
        <li><a href="/">INICIO</a></li>
        <li><a href="/">¿QUIENES SOMOS?</a></li>
        <li><a href="/">MINISTERIOS</a></li>
        <li><a href="/">SERVICIOS</a></li>
        <li><a href="/">CITA DEL DÍA</a></li>
        <li><a href="/">CONTÁCTANOS</a></li>
    </ul>
    <a className="Navbar__live" href="#">LIVE</a>
</nav>
);

export default Navbar;

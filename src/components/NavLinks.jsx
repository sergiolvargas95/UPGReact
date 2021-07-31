import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/quienessomos">¿QUIENES SOMOS?</Link></li>
            <li><Link to="/ministerios">MINISTERIOS</Link></li>
            <li><Link to="/servicios">SERVICIOS</Link></li>
            <li><Link to="/citadeldia">CITA DEL DÍA</Link></li>
            <li><Link to="/contactanos">CONTÁCTANOS</Link></li>
        </div>
    )
}

export default NavLinks;

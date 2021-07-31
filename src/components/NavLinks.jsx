import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.scss';

const NavLinks = ({ isMobile, closeMobileMenu }) => {
    return (
        <div className="List">
            <li onClick={() => isMobile && closeMobileMenu()}><Link to="/">INICIO</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to="/quienessomos">¿QUIENES SOMOS?</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to="/ministerios">MINISTERIOS</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to="/servicios">SERVICIOS</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to="/citadeldia">CITA DEL DÍA</Link></li>
            <li onClick={() => isMobile && closeMobileMenu()}><Link to="/contactanos">CONTÁCTANOS</Link></li>
        </div>
    )
}

export default NavLinks;

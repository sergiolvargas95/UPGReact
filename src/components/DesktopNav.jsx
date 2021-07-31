import React, { useState } from 'react';

import NavLinks from './NavLinks';
import Logo from '../assets/images/Logo.png';
import '../styles/components/Navbar.scss';

const DesktopNav = () => {
    return (
        <nav className="Navbar">
            <a href="/"><img src={Logo} alt="Logo"/></a>
                <ul>
                    <NavLinks />
                </ul>
            <a className="Navbar__live" href="#">LIVE</a>
        </nav>
    )
};

export default DesktopNav;
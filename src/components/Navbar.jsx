import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import '../styles/components/Navbar.scss';


const Navbar = () => {
    return (
        <nav className="Navbar">
            <MobileNav />
            <DesktopNav />
        </nav>
    )
};

export default Navbar;

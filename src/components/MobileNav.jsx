import React, { useState } from 'react';

import NavLinks from './NavLinks';
import Logo from '../assets/images/Logo.png';
import '../styles/components/Navbar.scss';
import {TiThMenu} from 'react-icons/ti';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const HamburgerIcon = <TiThMenu className="MenuHamburger" onClick={() => setOpen(!open)} size="40px" color="white" />
    const closeIcon = <IoMdCloseCircleOutline className="MenuClose" onClick={() => setOpen(!open)} size="40px" color="white" />
    const closeMobile = () => setOpen(false)
    return (
        <nav className="Navbar">
            <a href="/"><img src={Logo} alt="Logo"/></a>
            {open ? closeIcon : HamburgerIcon}
                {open && <ul>
                    <NavLinks />
                </ul>
            }
            <a className="Navbar__live" href="#">LIVE</a>
        </nav>
    )
};

export default MobileNav;
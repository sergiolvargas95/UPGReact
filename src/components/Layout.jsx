import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout

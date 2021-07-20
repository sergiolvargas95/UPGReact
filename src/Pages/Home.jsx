import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import Preaching from '../components/Preaching';
import Information from '../components/Information';
import MapView from '../components/MapView';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Welcome />
        <Services />
        <Preaching />
        <Information />
        <MapView />
        <Contact />
        <Footer />
    </React.Fragment>
);


export default Home;

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import Preaching from '../components/Preaching';
import Information from '../components/Information';
import Map from '../components/Map';

const Home = () => (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Welcome />
        <Services />
        <Preaching />
        <Information />
    </React.Fragment>
);


export default Home;

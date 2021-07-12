import React from 'react';
import HeroImage from '../assets/images/Hero.png';
import '../styles/components/Hero.scss';

const Hero = () => (
    <React.Fragment>
        <img className="Hero" src={HeroImage} alt="Image Hero" />
    </React.Fragment>
);

export default Hero;

import React from 'react';
import HeroImage from '../assets/images/Hero.png';
import '../styles/components/Hero.scss';

const Hero = () => (
    <div className="Hero">
        <img className="Hero-image" src={HeroImage} alt="Image Hero" />
    </div>
);

export default Hero;

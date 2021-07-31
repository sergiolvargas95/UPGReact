import React from 'react';
import HeroImage from '../assets/images/HeroMobile.png';
import '../styles/components/Hero.scss';

const HeroMobile = () => (
        <img className="Hero-mobile" src={HeroImage} alt="Image Hero" />
);

export default HeroMobile;
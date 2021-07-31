import React from 'react';
import HeroImage from '../assets/images/Hero.png';
import '../styles/components/Hero.scss';

const HeroDesk = () => (
    <img className="Hero-image" src={HeroImage} alt="Image Hero" />
);

export default HeroDesk;
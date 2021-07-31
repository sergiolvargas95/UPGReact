import React from 'react';
import HeroDesk from './HeroDesktop';
import HeroMobile from './HeroMobile';
import '../styles/components/Hero.scss';

const Hero = () => (
    <div className="Hero">
        <HeroDesk />
        <HeroMobile />
    </div>
);

export default Hero;

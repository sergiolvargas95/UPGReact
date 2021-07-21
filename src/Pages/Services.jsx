import React from 'react';
import MiniHero from '../components/MiniHero';
import ServicesImg from '../assets/images/Services.png';


const Services = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={ServicesImg}
                Title="Servicios"
            />
        </React.Fragment>
    )
}

export default Services;
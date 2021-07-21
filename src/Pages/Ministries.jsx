import React from 'react';
import MiniHero from '../components/MiniHero';
import MinisteriesSection from '../components/MinisteriesSection';
import MinisteriesImg from '../assets/images/Ministeries.png';


const Ministeries = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={MinisteriesImg}
                Title="Ministerios"
            />
            <MinisteriesSection />
        </React.Fragment>
    )
}

export default Ministeries;
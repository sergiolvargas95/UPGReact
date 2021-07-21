import React from 'react';
import MiniHero from '../components/MiniHero';
import MinisteriesImg from '../assets/images/Ministeries.png';


const Ministeries = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={MinisteriesImg}
                Title="Ministerios"
            />
        </React.Fragment>
    )
}

export default Ministeries;
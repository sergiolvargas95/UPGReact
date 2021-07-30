import React from 'react';
import MiniHero from '../components/MiniHero';
import Purposes from '../components/Purposes';
import Pastors from '../components/Pastors';
import WeAreImg from '../assets/images/WeAre.png';
import '../styles/Whoweare.scss';



const WeAre = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={WeAreImg}
                Title="¿Quienes Somos?"
            />
            <Purposes />
            <Pastors />
        </React.Fragment>
    )
}

export default WeAre

import React from 'react';
import MiniHero from '../components/MiniHero';
import QuoteImg from '../assets/images/Quote.png';


const Quote = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={QuoteImg}
                Title="Cita del Día"
            />
        </React.Fragment>
    )
}

export default Quote;
import React from 'react';
import MiniHero from '../components/MiniHero';
import QuoteImg from '../assets/images/Quote.png';
import Grid from '../components/Grid';


const Quote = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={QuoteImg}
                Title="Cita del Día"
            />
            <Grid />
        </React.Fragment>
    )
}

export default Quote;
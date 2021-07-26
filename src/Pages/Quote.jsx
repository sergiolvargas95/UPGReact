import React, { useState } from 'react';
import MiniHero from '../components/MiniHero';
import QuoteImg from '../assets/images/Quote.png';
import Grid from '../components/Grid';
import Modal from '../components/Modal';




const Quote = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={QuoteImg}
                Title="Cita del Día"
            />
            <Grid setSelectedImg={setSelectedImg}/>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
        </React.Fragment>
    )
}

export default Quote;
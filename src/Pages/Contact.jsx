import React from 'react';
import MiniHero from '../components/MiniHero';
import ContactImg from '../assets/images/Contact.png';


const Contact = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={ContactImg}
                Title="Contactanos"
            />
        </React.Fragment>
    )
}

export default Contact;
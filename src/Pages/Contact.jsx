import React from 'react';
import MiniHero from '../components/MiniHero';
import ContactImg from '../assets/images/Contact.png';
import Form from '../components/Form';


const Contact = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={ContactImg}
                Title="Contactanos"
            />
            <Form />
        </React.Fragment>
    )
}

export default Contact;
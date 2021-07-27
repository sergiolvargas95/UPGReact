import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Contact.scss';

import Phone from '../assets/images/Phone.png';
import Pray from '../assets/images/Pray.png';
import Email from '../assets/images/Email.png';

const Contact = () => (
    <div className="Contact">
        <div className="Contact__container">
            <a href="mailto:ministerio-upg@gmail.com" className="Contact__Button">
                <img src={Email} alt="" />
                <span className="Contact__Name">CORREO</span>
            </a>
        </div>
        <div className="Contact__container">
        <a href="tel:56456717" className="Contact__Button">
                <img src={Phone} alt="" />
                <span className="Contact__Name">TELÉFONO</span>
            </a>
        </div>
        <div className="Contact__container">
        <Link to="/Contactanos" className="Contact__Button">
                <img src={Pray} alt="" />
                <span className="Contact__Name">PETICIÓN DE ORACIÓN</span>
            </Link>
        </div>
    </div>
);

export default Contact;

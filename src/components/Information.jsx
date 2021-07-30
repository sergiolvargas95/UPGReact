import React from 'react';
import '../styles/components/Information.scss';
import InformationImg from '../assets/images/Presentation.jpeg';

const Information = () => (
    <div className="Information">
        <img className="Information__Img" src={InformationImg} alt="Information image" />
        <h2>IGLESIA UNCIÓN, PODER Y GLORIA</h2>
        <p>Trabajar en la predicación del evangelio a toda criatura, llevando refrigerio espiritual y físico; y que <br /> conozcan  el plan de salvación que Cristo tiene para sus vidas.</p>
    </div>
);

export default Information;

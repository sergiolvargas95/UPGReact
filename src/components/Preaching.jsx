import React from 'react';
import PreachingImg from '../assets/images/predicas.png';

import '../styles/components/Preaching.scss';

const Preaching = () => (
    <div className="Preaching">
        <h3>ULTIMAS PRÉDICAS</h3>
        <div className="Preaching__videos">
            <img src={PreachingImg} alt=""/>
            <img src={PreachingImg} alt=""/>
            <img src={PreachingImg} alt=""/>
        </div>
        <button className="Preaching__button">MÁS PREDICAS</button>
    </div>
);

export default Preaching;

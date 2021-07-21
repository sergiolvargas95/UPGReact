import React from 'react';
import PreachingImg from '../assets/images/predicas.png';
import VideoPlayer from './VideoPlayer';

import '../styles/components/Preaching.scss';

const Preaching = () => (
    <div className="Preaching">
        <h3>ULTIMAS PRÉDICAS</h3>
        <div className="Preaching__videos">
        <VideoPlayer
                UrlWelcome="https://www.youtube.com/watch?v=SlinZC9HLok"
                width='600px'
                height='350px'
        />
        <VideoPlayer
                UrlWelcome="https://www.youtube.com/watch?v=SlinZC9HLok"
                width='600px'
                height='350px'
        />
        <VideoPlayer
                UrlWelcome="https://www.youtube.com/watch?v=SlinZC9HLok"
                width='600px'
                height='350px'
        />
        </div>
        <button className="Preaching__button">MÁS PREDICAS</button>
    </div>
);

export default Preaching;

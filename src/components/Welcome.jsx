import React from 'react';
import  '../styles/components/Welcome.scss';

import WelcomeVideo from '../assets/videos/welcome.mp4';



const Welcome = () => (
        <div className="Welcome">
            <video className="Video-presentation" src={WelcomeVideo} alt="video presentation" controls autoplay/>
            <div className="Title">
                <h1>BIENVENIDOS A LA IGLESIA UPG</h1>
                <h2>IGLESIA MISIONERA Y EVANGELISTICA</h2>
            </div>
        </div>
);

export default Welcome;

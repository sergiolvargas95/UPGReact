import React from 'react';
import  '../styles/components/Welcome.scss';
import VideoPlayer from './VideoPlayer';



const Welcome = () => (
        <div className="Welcome">
            <VideoPlayer
                UrlWelcome="https://www.youtube.com/watch?v=8FNTUOSi-YE"
                width='620px'
                height='350px'
            />
            <div className="Title">
                <h1>BIENVENIDOS A LA IGLESIA UPG</h1>
                <h2>IGLESIA MISIONERA Y EVANGELISTICA</h2>
            </div>
        </div>
);

export default Welcome;

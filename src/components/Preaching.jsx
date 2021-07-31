import React from 'react';
import PreachingImg from '../assets/images/predicas.png';
import VideoPlayer from './VideoPlayer';

import '../styles/components/Preaching.scss';

const Preaching = () => (
        <div className="Preaching">
                <h3>ULTIMAS PRÉDICAS</h3>
                <div className="Preaching__videos">
                <div className="videito">
                        <VideoPlayer
                                UrlWelcome="https://www.youtube.com/watch?v=SlinZC9HLok"
                                width='100%'
                                height='100%'
                        />
                </div>
                <div className="videito">
                        <VideoPlayer
                                UrlWelcome="https://www.youtube.com/watch?v=SlinZC9HLok"
                                width='100%'
                                height='100%'
                        />
                </div>
                <div className="videito">
                        <VideoPlayer
                                UrlWelcome="https://www.youtube.com/watch?v=SlinZC9HLok"
                                width='100%'
                                height='100%'
                        />
                </div>
                </div>
                <button className="Preaching__button"><a target="_blank" rel="noopener" href="https://youtube.com/playlist?list=PLs-J-6QZHJ4Mg2wpTpS3ExQFJOhzVbfZ_">MÁS PREDICAS</a></button>
        </div>
);

export default Preaching;

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ UrlWelcome, width, height }) => {
    return (
        <div className="VideoPlayer" style={{ width: `${width}`, height: `${height}` }}>
            <ReactPlayer
                url={UrlWelcome}
                width='100%'
                height='100%'
                controls
            />
        </div>
    )
}

export default VideoPlayer;

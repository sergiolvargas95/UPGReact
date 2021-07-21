import React from 'react';
import '../styles/components/MiniHero.scss'

const MiniHero = ({ HeroImg, Title }) => {
    return (
        <div className="MiniHero">
            <img className="MiniHero__Img" src={HeroImg} alt="Hero" />
            <h3 className="MiniHero__Title">{Title}</h3>
        </div>
    )
}

export default MiniHero

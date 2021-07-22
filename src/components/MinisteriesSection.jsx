import React from 'react';
import '../styles/components/MinisteriesSection.scss';



const MinisteriesSection = ({ MinisteriesImg, MinisteriesTitle, MinisteriesDesc, bordercolor, izq }) => {
    if(izq) {
        return (
            <div className="MinisteriesSection animadoDer">
                <img className="MinisteriesSection__img" src={MinisteriesImg} alt="Ministerio" style={{border:`${bordercolor}`}}/>
                <div className="MinisteriesSection__container" style={{
                    paddingRight: `220px`
                }}>
                    <h4 className="MinisteriesSection__container-Title" >{MinisteriesTitle}</h4>
                    <p className="MinisteriesSection__container-description"  style={{
                    paddingLeft: `30px`
                }}>{MinisteriesDesc}</p>
                </div>
            </div>
    )
    } else {
        return (
            <div className="MinisteriesSection animadoIzq">
                <div className="MinisteriesSection__container" style={{
                    paddingLeft: `220px`}}>
                    <h4 className="MinisteriesSection__container-Title" >{MinisteriesTitle}</h4>
                    <p className="MinisteriesSection__container-description" style={{
                    paddingRight: `30px`, textAlign:`right`
                }} >{MinisteriesDesc}</p>
                </div>
                <img className="MinisteriesSection__img" src={MinisteriesImg} alt="Ministerio" style={{border:`${bordercolor}`}}/>
            </div>
        )
    }
}

export default MinisteriesSection;

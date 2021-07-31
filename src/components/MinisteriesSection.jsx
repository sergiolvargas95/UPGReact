import React from 'react';
import '../styles/components/MinisteriesSection.scss';



const MinisteriesSection = ({ MinisteriesImg, MinisteriesTitle, MinisteriesDesc, bordercolor, izq }) => {
    if(izq) {
        return (
            <div className="MinisteriesSection">
                <img id="RightImg" className="MinisteriesSection__img" src={MinisteriesImg} alt="Ministerio"/>
                <div id="RightConteiner" className="MinisteriesSection__container">
                    <h4 className="MinisteriesSection__container-Title" >{MinisteriesTitle}</h4>
                    <p className="MinisteriesSection__container-description"  id="DescriptionLeft">{MinisteriesDesc}</p>
                </div>
            </div>
    )
    } else {
        return (
            <div className="MinisteriesSection">
                <div className="MinisteriesSection__container" id="LeftCotainer">
                    <h4 className="MinisteriesSection__container-Title" >{MinisteriesTitle}</h4>
                    <p className="MinisteriesSection__container-description" id="DescriptionRight" >{MinisteriesDesc}</p>
                </div>
                <img id="LeftImg" className="MinisteriesSection__img" src={MinisteriesImg} alt="Ministerio" />
            </div>
        )
    }
}

export default MinisteriesSection;

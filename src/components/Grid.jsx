import React from 'react';
import '../styles/components/Grid.scss';

import img1 from '../assets/images/CitaDelDía/1.jpg';
import img2 from '../assets/images/CitaDelDía/2.jpg';
import img3 from '../assets/images/CitaDelDía/3.jpg';
import img4 from '../assets/images/CitaDelDía/4.jpg';
import img5 from '../assets/images/CitaDelDía/5.jpg';
import img6 from '../assets/images/CitaDelDía/6.jpg';
import img7 from '../assets/images/CitaDelDía/7.jpg';
import img8 from '../assets/images/CitaDelDía/8.jpg';
import img9 from '../assets/images/CitaDelDía/9.jpg';
import img10 from '../assets/images/CitaDelDía/10.jpg';
import img11 from '../assets/images/CitaDelDía/11.jpg';
import img12 from '../assets/images/CitaDelDía/12.jpg';
import img13 from '../assets/images/CitaDelDía/13.jpg';
import img14 from '../assets/images/CitaDelDía/14.jpg';
import img15 from '../assets/images/CitaDelDía/15.jpg';


const Grid = () => {
    return (
        <div className="Grid">
            <img className="Grid__item" src={img1} />
            <img className="Grid__item" src={img2} />
            <img className="Grid__item" src={img3} />
            <img className="Grid__item" src={img4} />
            <img className="Grid__item" src={img5} />
            <img className="Grid__item" src={img6} />
            <img className="Grid__item" src={img7} />
            <img className="Grid__item" src={img8} />
            <img className="Grid__item" src={img9} />
            <img className="Grid__item" src={img10} />
            <img className="Grid__item" src={img11} />
            <img className="Grid__item" src={img12} />
            <img className="Grid__item" src={img13} />
            <img className="Grid__item" src={img14} />
            <img className="Grid__item" src={img15} />
        </div>
    )
}

export default Grid

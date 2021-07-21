import React from 'react';
import '../styles/components/Pastors.scss';
import PastorsImg from '../assets/images/Pastors.jpg';

const Pastors = () => {
    return (
        <div className="Pastors">
            <div className="Pastors__Img">
                <img className="Pastors__Img-pic" src={PastorsImg} alt="Pastores" />
            </div>
            <div className="Pastors__Container">
                <h4 className="Pastors__Container-Title">NUESTROS PASTORES</h4>
                <p className="Pastors__Container-description">
                Nacimos en el año 2009, en el sector del Poblado en la ciudad de Medellín, Colombia, respondiendo al llamado de servicio que Dios hace al corazón de los Pastores David y Silvia Díaz, y con la convicción que Dios levantaría una congregación de adoradores en todo el valle del Aburrá.
                </p>
            </div>
        </div>
    )
}

export default Pastors

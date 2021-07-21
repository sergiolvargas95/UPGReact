import React from 'react';
import '../styles/components/Pastors.scss';
import PastorsImg from '../assets/images/Pastors.jpg';

const Pastors = () => {
    return (
        <div>
            <img src={PastorsImg} alt="Pastores" />
            <div>
                <h4>NUESTROS PASTORES</h4>
                <p>
                Nacimos en el año 2009, en el sector del Poblado en la ciudad de Medellín, Colombia, respondiendo al llamado de servicio que Dios hace al corazón de los Pastores David y Silvia Díaz, y con la convicción que Dios levantaría una congregación de adoradores en todo el valle del Aburrá.
                </p>
            </div>
        </div>
    )
}

export default Pastors

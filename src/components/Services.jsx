import React from 'react';
import '../styles/components/Services.scss'

const Services = () => (
    <div className="Services">
        <h2 className="Services__Title">SERVICIOS</h2>
        <div className="Services__schedule">
            <div className="Service__schedule-description">
                <h3>SERVICIO DE ORACIÓN</h3>
                <p>MIÉRCOLES</p>
                <p>7:00 PM - 9:00 PM</p>
            </div>
            <div className="Service__schedule-description">
                <h3>SERVICIO DE REFLEXIÓN Y ALABANZA</h3>
                <p>SÁBADO</p>
                <p>7:00 PM - 9:00 PM</p>
            </div>
            <div className="Service__schedule-description">
                <h3>SERVICIO DE ESCUELA DOMINICAL</h3>
                <p>DOMINGO</p>
                <p>10:00 AM - 12:00 PM</p>
            </div>
        </div>
    </div>
);

export default Services;

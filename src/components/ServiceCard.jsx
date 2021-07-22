import React from 'react';
import '../styles/components/ServiceCard.scss';

import Logo from '../assets/images/Logo.png';

const ServiceCard = ({ service, day, schedule,BackgroundImg }) => {
    return (
        <div className="Card">
            <img className="Card__Background" src={BackgroundImg} alt="servicio" />
            <h4 className="Card__Title">{service}</h4>
            <p className="Card__Day">{day}</p>
            <p className="Card__Schedule">{schedule}</p>
            <div className="Card__Logo">
                <img src={Logo} alt="Logo" />
            </div>
            <aside className="Card__info">
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate atque odio quibusdam. Esse, exercitationem magnam nulla rerum perferendis animi corrupti, quasi consectetur cumque repudiandae, iure enim autem vero modi.
                        Nostrum ex molestiae velit nisi necessitatibus, aliquid dolorum ea accusantium vero quaerat, dolore minus ad doloremque earum debitis incidunt quia. Inventore praesentium at deleniti ducimus voluptatum rem laudantium perspiciatis beatae.
                    </p>
                </div>
            </aside>
        </div>
    )
}

export default ServiceCard

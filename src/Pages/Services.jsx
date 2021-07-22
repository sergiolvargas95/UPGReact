import React from 'react';
import MiniHero from '../components/MiniHero';
import ServiceCard from '../components/ServiceCard';
import '../styles/Seriveces.scss'

import ServicesImg from '../assets/images/Services.png';
import ChildrenSchoolImg from '../assets/images/ChildrenSchool.jpg'
import SundaySchoolImg from '../assets/images/SundaySchoolService.jpg';
import PrayServiceImg from '../assets/images/PrayService.jpg';
import WorshipSerivceImg from '../assets/images/WorshipService.jpg';


const Services = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={ServicesImg}
                Title="Servicios"
            />
            <div className="ServicesSection">
                <ServiceCard
                    BackgroundImg={ChildrenSchoolImg}
                    service='ESCUELITA DE NIÑOS'
                    day='SÁBADOS'
                    schedule='3:00 PM - 4:00 PM'
                />
                <ServiceCard
                    BackgroundImg={PrayServiceImg}
                    service='SERVICIO DE ORACIÓN'
                    day='MIÉRCOLES'
                    schedule='7:00 PM - 9:00 PM'
                />
                <ServiceCard
                    BackgroundImg={WorshipSerivceImg}
                    service='SERVICIO DE REFLEXIÓN Y ALABANZA'
                    day='SÁBADOS'
                    schedule='7:00 PM - 9:00 PM'
                />
                <ServiceCard
                    BackgroundImg={SundaySchoolImg}
                    service='SERVICIO DE ESCUELA DOMINICAL'
                    day='DOMINGO'
                    schedule='10:00 AM - 12:00 PM'
                />
            </div>
        </React.Fragment>
    )
}

export default Services;
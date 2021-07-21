import React from 'react';
import '../styles/components/MinisteriesSection.scss';
import MinisteriesImg from '../assets/images/WorshipImg.jpg';

const MinisteriesSection = () => {
    return (
        <div className="MinisteriesSection">
            <img className="MinisteriesSection__img" src={MinisteriesImg} alt="Ministerio" />
            <div className="MinisteriesSection__container">
                <h4 className="MinisteriesSection__container-Title" >MINISTERIO DE ALABANZA</h4>
                <p className="MinisteriesSection__container-description" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quis labore aliquam. Voluptatem corporis ab illum atque porro, <br /> qui tempora impedit quia quaerat aperiam ullam eveniet, magnam cumque dolorem minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Autem delectus sequi iusto provident cumque officiis, impedit recusandae sint ratione corporis inventore quisquam perspiciatis veniam repellendus <br/>dolorem non quidem ipsam voluptatem! </p>
            </div>
        </div>
    )
}

export default MinisteriesSection;

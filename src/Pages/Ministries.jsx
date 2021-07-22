import React from 'react';
import MiniHero from '../components/MiniHero';
import MinisteriesSection from '../components/MinisteriesSection';

import MinisteriesImg from '../assets/images/Ministeries.png';
import WorshipImg from '../assets/images/WorshipImg.jpg';
import KidsImg from '../assets/images/kidsMinisteries.jpg';
import EvangelimsImg from '../assets/images/EvangelismMinisteries.jpg';
import YoungthImg from '../assets/images/YouthMinisteries.jpg';
import MenImg from '../assets/images/MenMinisteries.jpg';
import LadiesImg from '../assets/images/LadiesMinisteries.jpg';
import IntercessionImg from '../assets/images/IntercessionMinisteries.jpg';
import CommunicationImg from '../assets/images/CommunicationsMinisteries.jpg';
import CounselingImg from '../assets/images/CounselingMinisteries.jpg';
import CoupleImg from '../assets/images/CouplesMinisteries.jpg';





const Ministeries = () => {
    return (
        <React.Fragment>
            <MiniHero
                HeroImg={MinisteriesImg}
                Title="Ministerios"
            />
            <MinisteriesSection
                MinisteriesImg={WorshipImg}
                MinisteriesTitle='MINISTERIO DE ALABANZA'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #ADD137'}
                izq
            /><MinisteriesSection
                MinisteriesImg={KidsImg}
                MinisteriesTitle='MINISTERIO DE NIÑOS'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #1CB5F6'}
            /><MinisteriesSection
                MinisteriesImg={YoungthImg}
                MinisteriesTitle='MINISTERIO DE JOVENES'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #ADD137'}
                izq
            /><MinisteriesSection
                MinisteriesImg={LadiesImg}
                MinisteriesTitle='MINISTERIO DE DAMAS'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #1CB5F6'}
            /><MinisteriesSection
                MinisteriesImg={MenImg}
                MinisteriesTitle='MINISTERIO DE VARONES'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #ADD137'}
                izq
            /><MinisteriesSection
                MinisteriesImg={IntercessionImg}
                MinisteriesTitle='MINISTERIO DE INTERCESIÓN'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #1CB5F6'}
            /><MinisteriesSection
                MinisteriesImg={EvangelimsImg}
                MinisteriesTitle='MINISTERIO DE EVANGELISMO'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #ADD137'}
                izq
            /><MinisteriesSection
                MinisteriesImg={CommunicationImg}
                MinisteriesTitle='MINISTERIO DE COMUNICACIONES'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #1CB5F6'}
            /><MinisteriesSection
                MinisteriesImg={CounselingImg}
                MinisteriesTitle='MINISTERIO DE CONSEJERÍA'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #ADD137'}
                izq
            /><MinisteriesSection
                MinisteriesImg={CoupleImg}
                MinisteriesTitle='MINISTERIO DE PAREJAS'
                MinisteriesDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique, molestiae rerum impedit non dicta repudiandae? Corporis voluptate maiores sit, labore, similique fugiat expedita non minima modi beatae adipisci veniam?
                Suscipit fugit omnis aspernatur magni odio? Voluptatum eaque neque vel odio autem, quam asperiores maiores dolore at delectus ex nulla, doloribus distinctio eligendi rerum, alias tempore veritatis iste tenetur. Minus.'
                bordercolor={'2px solid #1CB5F6'}
            />
        </React.Fragment>
    )
}

export default Ministeries;
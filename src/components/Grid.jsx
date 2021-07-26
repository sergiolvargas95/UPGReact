import React from 'react';
import useFirestore from '../hooks/useFirestore';
import '../styles/components/Grid.scss'

const Grid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('Gallery');

    return (
        <div className='Grid'>
            {   docs && docs.map(doc => (
                <div  className='img-wrap' key={doc.id}
                    onClick={() => setSelectedImg(doc.link) }
                >
                    <img className="Grid__item" src={doc.link} alt={doc.name} />
                </div>
            ))}
        </div>
    )
}

export default Grid;
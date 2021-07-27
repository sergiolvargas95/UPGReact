import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = e => {
        if(e.target.classList.contains('Backdrop')) {
            setSelectedImg(null)
        }
    }
    return (
        <div className="Backdrop"
            onClick={handleClick}
        >
            <img src={selectedImg} alt="imagen modal" />
        </div>
    )
}

export default Modal

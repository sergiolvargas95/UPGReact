import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ErrorFound.scss';
import ErrorImg from '../assets/images/404.png'

const ErrorFound = () => {
    return (
        <div className="Error">
            <img src={ErrorImg} alt="" />
            <div className="Error__text">
                <h3>404 not Found</h3>
                <p>Oops! Algo ha ido mal...</p>
                <button><Link to="/">REGRESAR</Link></button>
            </div>
        </div>
    )
}

export default ErrorFound

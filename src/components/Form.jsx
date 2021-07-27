import React from 'react';
import '../styles/components/Form.scss'

const Form = () => {
    return (
        <>
            <form className="Form">
                <input type="text" name="name" placeholder="Nombre..." required/>
                <input type="email" name="email" placeholder="Correo electrónico..." required/>
                <textarea type="text" name="comments" placeholder="Déjanos un mensaje" required/>
                <button>ENVIAR</button>
            </form>
        </>
    )
}

export default Form;

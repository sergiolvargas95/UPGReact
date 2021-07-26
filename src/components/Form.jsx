import React from 'react'

const Form = () => {
    return (
        <React.Fragment>
            <form className="Form">
                <label>Nombre Completo</label>
                <input type="text" name="name" placeholder="Nombre..."/>
                <label>Correo Electrónico</label>
                <input type="email" name="email" placeholder="Correo eletrcónico..."/>
                <label>Comentarios</label>
                <input type="text" name="comments" placeholder="Déjanos un mensaje"/>
            </form>
        </React.Fragment>
    )
}

export default Form;

import React, { useState } from 'react';
import axios from "axios";
import '../styles/components/Form.scss'


const Form = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });
    const [active, setActive ] = useState('hidden');

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
        submitting: false,
        status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true, visible:"visible" });
        axios({
            method: "post",
            url: "https://formspree.io/xknkqnko",
            data: new FormData(form)
        })
            .then(r => {
            handleServerResponse(true, "Gracias por tus comentarios", form);
            setActive('visible');
            console.log('funciona')
            })
            .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
            }).finally(() => {
                setTimeout(() => {
                    setActive('hidden');
                    console.log('funciona x2')
                }, 5000);
            });
    };
    return (
        <>
            <form className="Form" onSubmit={handleOnSubmit}>
                <input type="text" name="name" placeholder="Nombre..." required/>
                <input type="email" name="email" placeholder="Correo electrónico..." required/>
                <textarea type="text" name="comments" placeholder="Déjanos un mensaje" required/>
                <input disabled={serverState.submittingg} type="submit" value="ENVIAR" id="Send" />
                {serverState.status && (
                <div style={{visibility: active}} className={!serverState.status.ok ? "errorMsg" : ""}  id="Message">
                    <div>
                        <h3>Gracias por sus comentarios</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"/><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"/><path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z"/></svg>
                    </div>
                </div>
                )}
            </form>
        </>
    )
}

export default Form;











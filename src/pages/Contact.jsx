import React, { useEffect } from 'react';
import wave_bottom from '../assets/wave/wave_bottom_portfolio.svg'
import { useForm } from '../hooks/useForm';
import Aos from 'aos';

const initialForm = {
    name:'',
    email:'',
    message:''
}

const validationsForm = (form) => {
    let errors = {};

    let expresionRegName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let expresionRegEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let expresionRegMessage = /^.{1,255}$/;

    if (!form.name.trim()){
        errors.name = 'El campo "Nombre" es obligatorio.';
    } else if(!expresionRegName.test(form.name.trim())){
        errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco.'
    }

    if (!form.email.trim()){
        errors.email = 'El campo "Email" es obligatorio.';
    } else if(!expresionRegEmail.test(form.email.trim())){
        errors.email = 'El campo "Email" es incorrecto.'
    }

    if (!form.message.trim()){
        errors.message = 'El campo "Mensaje" es obligatorio.';
    }else if(!expresionRegMessage.test(form.message.trim())){
        errors.message = 'El campo "Mensaje" solo acepta 255 caracteres.'
    }

    

    return errors;
} 

const Contact = () => {
    
    useEffect( () => {
        Aos.init( {duration: 5000});
    }, [])

    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm)

    return ( 
        <div className="contact-div">
            <img src={wave_bottom} alt="" />
                    <form data-aos="fade-right" className="contact" id="contact" onSubmit={handleSubmit}>
                        <div data-aos="fade-right" className="contact-title">
                            <h2>Contact</h2>
                        </div>
                        <div className="contact-nombre">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Escribe tu nombre"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.name}
                                required
                            />
                            {errors.name && <p className="errors">{errors.name}</p>}
                        </div>
                        <div className="contact-correo">
                            <label htmlFor="email">Correo</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example:correo@correo.com"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.email}
                                required
                            />
                            {errors.email && <p className="errors">{errors.email}</p>}

                        </div>
                        <div className="contact-mensaje">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea
                                name="message"
                                id="message"                      
                                placeholder="Escriba su mensaje"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={form.message}
                                required
                            >
                            </textarea>
                            {errors.message && <p className="errors">{errors.message}</p>}
                        </div>
                        <input className="contact-submit" type="submit"/>
                        {loading && <div className="loading"><i className="fas fa-circle-notch"></i></div>}
                    </form>
                    {response && <p className="exito">¡El mensaje se envió correctamente! Gracias por contactarte conmigo</p>}
		</div>
     );
}
 
export default Contact;

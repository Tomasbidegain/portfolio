import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import im from '../assets/img/Me.png';
import cv from '../assets/cv.pdf';

const SobreMi = () => {

    useEffect( () => {
        Aos.init( {duration: 1000});
    }, [])

    const anios = () => {
        let nacimiento = new Date(2001, 1, 24);
        let fechaActual = new Date();
        let anios = fechaActual.getFullYear() - nacimiento.getFullYear();

        return anios;
    }

    let edad = anios();

    return ( 
            <div id="sobreMi" className="sobreMiBackground">
                <div className="sobreMi">
                    <div data-aos='fade-right' className="sobreMi__img">
                        <img src={im} alt="I'm" />
                    </div>
                    <div data-aos='fade-left' className="sobreMi__info">
                        <div className="sobreMi__info-title">
                            <h2>Sobre mí</h2>
                        </div>
                        <div className="sobreMi__info-parrafo">
                            <p>Tengo {edad} años, actualmente me encuentro cursando la carrera de Licenciatura en Sistemas de Información. Desde mi parte como estudiante, estoy predispuesto a aplicar los conocimientos adquiridos y a seguir aprendiendo al respecto.</p>
                        </div>
                        <a className="a_cv" href={cv} target="_ blank" rel='noreferrer'>
                            <button className="cv">
                                <div className="icono">
                                    <i className="fas fa-file-download"></i>
                                </div>
                                <span>Descargar CV</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
     );
}
 
export default SobreMi;
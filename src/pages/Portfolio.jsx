import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import wave from '../assets/wave/wave_portfolio.svg';

import movflix from '../assets/img/MovFlix.png';
import mercadolib from '../assets/img/MercadoLibre.png';
import gifs from '../assets/img/Gifs.png';
import tareas from '../assets/img/AdministrarProyectos.png';

const Portfolio = () => {

    useEffect( () => {
        Aos.init( {duration: 2000});
    }, [])

    return ( 
        <div id="portfolio"className="portfolio">
            <img className="portfolio_wave" src={wave} alt="" />
            <div data-aos='flip-left' className="portfolio__title">
                <h2>Portfolio</h2>
            </div>
            <div data-aos="flip-right" className="portfolio-card">
                <div className="portfolio__card-item">
                    <img src={movflix} alt="Proyecto MovFlix" />
                    <div className="capa">
                        <div className="capa-info">
                            <h3>MovFlix</h3>
                            <p>Podrás filtrar entre las peliculas populares y tendencias del momento.</p>
                        </div>
                        <div className="button-portfolio">
                            <a href="https://github.com/Tomasbidegain/spa-movies" target="_ blank" rel='noreferrer'><button>Code</button></a>
                            <a href="https://tomasbidegain.github.io/spa-movies/" target="_ blank" rel='noreferrer'><button>Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card-item">

                    <img src={mercadolib} alt="Proyecto Mercado Libre" />
                    <div className="capa">
                        <div className="capa-info">
                            <h3>Mercado Libre</h3>
                            <p>Podrás buscar productos y ver detalles, caracteristicas, precio, etc. del mismo.</p>
                        </div>
                        <div className="button-portfolio">
                            <a href="https://github.com/Tomasbidegain/app-mercadolibre" target="_ blank" rel='noreferrer'><button>Code</button></a>
                            <a href="https://nifty-heisenberg-cf9a33.netlify.app/" target="_ blank" rel='noreferrer'><button>Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card-item">

                    <img src={gifs} alt="Proyecto GifExpertApp"/>
                    <div className="capa">
                        <div className="capa-info">
                            <h3>Gif Expert App</h3>
                            <p>Podrás realizar una busqueda de gifs por su categoria</p>
                        </div>
                        <div className="button-portfolio">
                            <a href="https://github.com/Tomasbidegain/gif-expert-app" target="_ blank" rel='noreferrer'><button>Code</button></a>
                            <a href="https://peaceful-ritchie-85bbb2.netlify.app/" target="_ blank rel='noreferrer'"><button>Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card-item">

                    <img src={tareas} alt="Proyecto administrar tareas" />
                    <div className="capa">
                        <div className="capa-info">
                            <h3>Administra tus proyectos</h3>
                            <p>Podrás administrar las tareas de tu proyecto</p>
                        </div>
                        <div className="button-portfolio">
                            <a href="https://github.com/Tomasbidegain/tareasoft" target="_ blank rel='noreferrer'"><button>Code</button></a>
                            <a href="https://sad-engelbart-a2813d.netlify.app/" target="_ blank rel='noreferrer'"><button>Project</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import wave_bottom from '../assets/wave/wave_bottom.svg';
import html from '../assets/icon/html.svg';
import css from '../assets/icon/css.svg';
import js from '../assets/icon/js.svg';
import react from '../assets/icon/react.svg';
import python from '../assets/icon/python.svg';
import github from '../assets/icon/github.svg';
import git from '../assets/icon/git.svg';
import nodejs from '../assets/icon/nodejs.svg';


const Skills = () => {

    useEffect( () => {
        Aos.init( {duration: 3000});
    }, [])

    return ( 
        <div className="skillsBackground">
            <img src={wave_bottom} alt=""/>
            <div id="skills" className="skills">
                <div data-aos='fade-down' className="skills__title">
                    <h2>Skills</h2>
                </div>
                <div data-aos="flip-left" className="skills-container">
                    <div className="skills__icons">
                        <div className="skills__icon">
                            <img className="skills_logo" src={html} alt="HTML" title="HTML" />
                        </div>
                        <div className="skills__icon">
                            <img className="skills_logo" src={css} alt="CSS" title="CSS" />
                        </div>
                        <div className="skills__icon">
                            <img className="skills_logo" src={js} alt="JavaScript" title="JavaScript" />
                        </div>
                        <div className="skills__icon">
                            <img className="skills_logo" src={react} alt="React" title="React" />
                        </div>
                        <div className="skills__icon">
                            <img className="skills_logo" src={python} alt="Python" title="Python" />
                        </div>
                        <div className="skills__icon">
                            <img className="skills_logo" src={github} alt="GitHub" title="GitHub" />
                        </div>
                        <div className="skills__icon">
                            <img className="skills_logo" src={git} alt="Git" title="Git" />
                        </div>
                        <div className="skills__icon">
                            <img className="skills_logo" src={nodejs} alt="NodeJS" title="NodeJS" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;
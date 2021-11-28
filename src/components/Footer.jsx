import React from 'react';
import linkedin from '../assets/icon/linkedin.png';
import github from '../assets/icon/github.svg';
import instagram from '../assets/icon/instagram.svg';

const Footer = () => {
    
    let fechaActual = new Date();

    return ( 
        <div className="footer">
            <div className="footer-icons">
                <div className="footer__icon">
                    <a href="https://www.linkedin.com/in/tom%C3%A1s-bidegain-530663218/" target="_ blank rel='noreferrer'"><img className="footer_logo" src={linkedin} alt="Linkedin" title="Linkedin" /></a>
                </div>
                <div className="footer__icon">
                    <a href="https://github.com/Tomasbidegain" target="_ blank rel='noreferrer'"><img className="footer_logo" src={github} alt="GitHub" title="GitHub" /></a>
                </div>
                <div className="footer__icon">
                    <a href="https://www.instagram.com/tomasbidegain/" target="_ blank rel='noreferrer'"><img className="footer_logo" src={instagram} alt="Instagram" title="Instagram" /></a>
                </div>
            </div>
            <p>©Copyright {fechaActual.getFullYear()} Bidegain Tomás</p>
        </div>
     );
}
 
export default Footer;
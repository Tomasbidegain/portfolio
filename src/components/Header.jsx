/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/img/logo.png'

const Header = () => {

    return ( 
        <div className="header">
            <div className="elementos">
                <div className="logo">
                    <a href="#home"><img src={logo} alt="Logo"/></a>
                </div>
                
                <label htmlFor="menu" className="nav__label">
                    <i className="fas fa-bars"></i>
                </label>
                <input type="checkbox" id="menu" className="nav__input"/>

                <div className="nav" id="nav">
                    <a className="nav-link" href="#sobreMi">SOBRE MÍ </a>
                    <a className="nav-link" href="#skills">SKILLS</a>
                    <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                    <a className="nav-link" href="#contact">CONTACT</a>
                </div>
            </div>
        </div>
     );
}
 
export default Header;

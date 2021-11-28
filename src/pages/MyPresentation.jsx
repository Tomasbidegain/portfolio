import React from 'react';
import wave from '../assets/wave/wave.svg';

const MyPresentation = () => {
    return ( 
        <div id="home" className="myPresentation">
            <div className="myPresentation__title">
                <h1>Hola! Mi nombre es</h1>
                <h1 className="name">Bidegain Tomás</h1>
            </div>
            <div className="wave">
                <img src={wave} alt="" />
            </div>
        </div>
     );
}
 
export default MyPresentation;
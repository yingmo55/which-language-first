import React from 'react';
import './Background.css';
import BackgroundBinary from '../BackgroundBinary/BackgroundBinary';

function Background() {
    return(
    <div id='mainBG'>
        <div id='overlay'></div>
        <div className='background1'>
        <BackgroundBinary />
        <BackgroundBinary />
        <BackgroundBinary />
        <BackgroundBinary /> 
        </div>
    </div>
    )
}

export default Background;
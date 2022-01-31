import React from 'react';
import './Background.css';
import BackgroundBinary from '../BackgroundBinary/BackgroundBinary';

function Background() {
    return(
    <div id='mainBG'>
        <div className='background1'>
        <div id='overlay'></div>
        <BackgroundBinary />
        <BackgroundBinary />
        <BackgroundBinary />
        <BackgroundBinary /> 
        </div>
    </div>
    )
}

export default Background;
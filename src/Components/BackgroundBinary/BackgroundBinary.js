import React from 'react';
import './BackgroundBinary.css';

function BackgroundBinary() {
    return(
        <div className="binary-background">
            <p className="binary">1 1 0 0 1 1 0 0 0 0 0 0  1 1 0 0 </p>
            <p className="binary">0 0 1 1 1 1 1 1  1 1 0 0 0 0 1</p>
            <p className="binary">1 0 0 0 0 0 0   1 1 1 1 0 0 0 0 1 1 0 0 1 1</p>
            <p className="binary">1 1 1 1 0 0 1 1 1 1 0 0 0 0</p>
            <p className="binary">1 1 1 1 0 0 1 1 1 1 0 0 </p>
            <p className="binary">0 0   1 1 1 1 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0</p>
            <p className="binary">0 0 0     1 1 0 0 1 1 0 0 1 1 1 1 1 1</p>
            <p className="binary">1 1 1 1 0 0 1 1 1 1 1 1 1 1</p>  
            <p className="binary"> 1 1 1 1 1 0 0 0 0 1 1 0 0     1 1 1 1 0</p>
            <p className="binary">0 1 1 1 1 0 0 0 0 1 1 1</p>
            <p className="binary"> 1 0 0 0 0 1 1 0 0 0 0</p>
            <p className="binary">1 1 0 0 0 0 0 0 0 0 1 1    1 1 0 0 0 </p>
            <p className="binary">0 1 1 1 1 1 1    1 1 0 0 1 1 0 0 0 0 1</p>
        </div>
    )
}

export default BackgroundBinary;
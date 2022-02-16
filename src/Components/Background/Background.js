import React, {useRef, useState, useEffect} from 'react';
import './Background.css';
import BackgroundBinary from '../BackgroundBinary/BackgroundBinary';

function Background() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, [screenWidth]);

    useEffect(() => {
        window.addEventListener('resize', setScreenWidth);
         
        return(() => {
            window.removeEventListener('resize', setScreenWidth);
        })
      }, [screenWidth])

    const numOfRender = Math.floor(width / 390) + 1;
    let backgroundArray = [];
    for (let i=0; i < numOfRender; i++){
        backgroundArray.push(<BackgroundBinary key={i} />);
        }
   const background = backgroundArray.map(item => item)

    return(
    <div id='mainBG'>
        <div className='background1' ref={ref} role="presentation">
        <div id='overlay'></div>
        {background}
        </div>
    </div>
    )
}

export default Background;
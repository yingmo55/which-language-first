import React from 'react';
import './MessageBox.css';

function MessageBox(props) {
    return(
        <div className='message' style={props.style}>
            {props.children}
        </div>
    )
}

export default MessageBox;
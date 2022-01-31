import React from 'react';
import './MessageBox.css';

function MessageBox(props) {
    return(
        <div className='message' style={props.style}>
            <p>test</p>
        </div>
    )
}

export default MessageBox;
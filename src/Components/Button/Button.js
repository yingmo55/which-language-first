import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button style={props.style}>{props.text}</button>
  );
}



export default Button;

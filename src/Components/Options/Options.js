import React, {useState} from "react";
import './Options.css';

function Options(props) {
    const options = props.options;
    const nextQuestion = props.nextQuestions;

    const allOptions = options.map((option, index) => 
        <button className="options" 
                key={index}
                id={index}
                value={nextQuestion[index]}
                onClick={props.onClick} >{option}</button>
        )

    return (
    <>
        {allOptions}
    </>

    )
}

export default Options;
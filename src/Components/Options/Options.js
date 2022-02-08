import React from "react";
import './Options.css';

function Options(props) {
    const changeQuestion = props.changeQuestion;
    const options = Object.keys(props.options);
    const nextQuestion = Object.values(props.options);

    const changeIndex = (e) => {
        console.log(e.target.value)
        changeQuestion(e.target.value)
    }

    const allOptions = options.map((option, index)=>
        <button className="options" 
                key={index} 
                value={nextQuestion[index]}
                onClick={changeIndex} >{option}</button>
    )

    return (
    <>
        {allOptions}
    </>

    )
}

export default Options;
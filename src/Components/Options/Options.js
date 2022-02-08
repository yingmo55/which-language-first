import React, {useState} from "react";
import './Options.css';

function Options(props) {
    const [ jobOrStartUp, setJobOrStartUp ] = useState(null); // job: true startup: false
    const changeQuestion = props.changeQuestion;
    let options = Object.keys(props.options);
    const nextQuestion = Object.values(props.options);
    const currentIndex = props.currentQuestion;

    const changeIndex = (e) => {
        const choice = e.target.value
        const keys = e.target.id
        const option = options[keys]
        switch (option){
            case "Get a job":
                changeQuestion(choice[0]);
                setJobOrStartUp(true);
                break;
            case "I have a Startup idea!":
                changeQuestion(choice[0])
                setJobOrStartUp(false)
                break;
            case "web": 
                jobOrStartUp ? changeQuestion(choice[0]) : changeQuestion(choice[2]);
                break;
            default:
                changeQuestion(choice);
                break;
        }
    }

    options = !jobOrStartUp && currentIndex === '5' ? options.slice(0, options.length - 2) : options ;

    const allOptions = options.map((option, index) => 
        <button className="options" 
                key={index}
                id={index}
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
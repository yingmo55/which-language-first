import React, {useState} from "react";
import Options from "../../Components/Options/Options";
import { getRandomAnswer } from "../../Util";

function OptionsContainer(props) {
    const [ jobOrStartUp, setJobOrStartUp ] = useState(null); // job: true startup: false
    const changeQuestion = props.changeQuestion;
    let options = Object.keys(props.options);
    const nextQuestions = Object.values(props.options);
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
                changeQuestion(choice[0]);
                setJobOrStartUp(false);
                break;
            case "web": 
            console.log(option, "line 27")
                jobOrStartUp ? changeQuestion(choice[0]) : changeQuestion(choice[2]);
                break;
            case "Yes":
                if (currentIndex === '2'){
                setJobOrStartUp(false);
                changeQuestion(choice[0]);
                } else{
                    changeQuestion(choice);
                }
                break;
            case "I don't know, just pick one for me":
              changeQuestion(getRandomAnswer())
              break;
            default:
                changeQuestion(choice);
                break;
        }
    }

    options = !jobOrStartUp && currentIndex === '5' ? options.slice(0, options.length - 2) : options ;
    
    return (
    <Options options={options}
             nextQuestions={nextQuestions}
             onClick={changeIndex}/>
    )
}

export default OptionsContainer;
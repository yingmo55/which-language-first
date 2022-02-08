import React, {useState} from "react";
import OptionsContainer from "../../Container/OptionsContainer/OptionsContainer";
import {quizQuestions} from '../../Components/Questions/questions';
import Results from "../../Components/Results/Results";
import Quiz from "../../Components/Quiz/Quiz";

function QuizContainer(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState('');
    let question = <h2> {quizQuestions[(currentQuestion)].question} </h2>
    let choices = quizQuestions[currentQuestion].choices;

    const changeQuestion = (value) => {
        console.log(`changeQuestion: ${value}`)
        if(isNaN(parseInt(value))){
            setResult(value)
        } else {
        setCurrentQuestion(value);
        }
    }

    const showFinalResult = (value) => {
        setResult(value)
    }

    let quiz = (
        <>
        {question}
        <OptionsContainer currentQuestion={currentQuestion}
                 showFinalResult={showFinalResult}
                 options={choices}
                 changeQuestion={changeQuestion}/>
        </>
    )

    let results = <Results result={result} />

    return (
        <Quiz result={result}
              quiz={quiz} 
              results={results}/>
    )
}

export default QuizContainer;
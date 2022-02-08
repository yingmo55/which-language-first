import React, {useEffect, useState} from "react";
import MessageBox from "../MessageBox/MessageBox";
import Options from '../Options/Options'; 
import {quizQuestions, results} from './questions';

function Quiz(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let question;
    let choices;
    question = <p> {quizQuestions[currentQuestion].question} </p>
    choices = quizQuestions[currentQuestion].choices;

    const changeQuestion = (value) => {
        setCurrentQuestion(value)
    }

    useEffect(()=> {
        question = <p> {quizQuestions[currentQuestion].question} </p>
    }, [currentQuestion]);

    return (
        <>
        <MessageBox messages={question}>
        <Options currentQuestion={currentQuestion}
                 options={choices}
                 changeQuestion={changeQuestion}/>
        </MessageBox>
        </>
    )
}

export default Quiz;
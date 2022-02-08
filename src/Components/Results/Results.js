import React, {useEffect, useState} from "react";
import MessageBox from "../MessageBox/MessageBox";
import {results} from '../Questions/questions';

function Results(props) {
    const result = results[props.result] || null;
    return (
        <>
        <h2>You might be interested in learning...</h2>
        <p>{result}</p>
        </>
    )
}

export default Results;
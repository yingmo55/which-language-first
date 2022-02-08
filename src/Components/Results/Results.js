import React from "react";
import {results} from '../Questions/questions';

function Results(props) {
    const result = results[props.result] || null;
    const styles = {
        fontSize: '2rem'
    }
    return (
        <>
        <h2>You might be interested in learning...</h2>
        <p style={styles}>{result}</p>
        </>
    )
}

export default Results;
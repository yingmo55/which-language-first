import React from "react";
import MessageBox from "../MessageBox/MessageBox";

function Quiz(props) {
    const {result, quiz, results} = props;

    return (
        <>
        <MessageBox >
        {!result ? quiz : results}
        </MessageBox>
        </>
    )
}

export default Quiz;
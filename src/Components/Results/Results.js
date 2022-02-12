import React from "react";
import { styles } from "./style";
import { results } from "../Questions/questions";

function Results(props) {
  const result = results[props.result] || props.result;
  const handleReset = props.handleReset;

  return (
    <>
      <h2>You might be interested in learning...</h2>
      <p style={styles.fontSize}>{result}</p>
      <button id="resetButton" style={styles.buttonStyle} onClick={handleReset}>
        Wanna try again?
      </button>
    </>
  );
}

export default Results;

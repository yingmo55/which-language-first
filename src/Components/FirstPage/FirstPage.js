import React from 'react';
import MessageBox from '../MessageBox/MessageBox';
import { styles } from './style';

function FirstPage(props) {
const handleChange = props.handleChange;


const titleH1 = (
  <h1 style={styles.zIndex}>Which Programming Language <br></br>
  Should I Learn First?</h1>
  );


const firstMessage = (
  <>
  <p>Interested in programming, but you don't know which language to learn first?</p>
  <p>Based on <a href='http://carlcheo.com/startcoding' target="_blank"> this flowchart from Carlcheo.com</a> , this quiz may give you an idea of what language to learn based on your interests!</p>
  <p>Notice: the original guide was written in 2014, some information may be out of date. It can still be a good reference, however.</p>
  </>
);

const startQuizButton = (
  <button style={styles.zIndex} onClick={handleChange}>
  Click here to start Quiz
  </button>
);


return (
  <div className="App">
    {titleH1}
    <MessageBox style={styles.componentMargin}>
      {firstMessage}
    </ MessageBox>
    {startQuizButton}
  </div>)
  }

export default FirstPage;
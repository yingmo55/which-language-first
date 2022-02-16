import React from 'react';
import MessageBox from '../MessageBox/MessageBox';
import { styles } from './style';

function FirstPage(props) {
const handleChange = props.handleChange;


const titleH1 = (
  <h1 style={styles.zIndex}>Which <br/>Programming Language <br/>
  Should I Learn First?</h1>
  );


const firstMessage = (
  <>
  <p>Interested in programming, but don't know which language to learn first?</p>
  <p>Based on <a href='http://carlcheo.com/startcoding'> this flowchart from Carlcheo.com</a>, this quiz may give you an idea of which language to learn based on your interests!</p>
  <p>Notice: the original guide was written in 2014, some information may be out of date.</p>
  </>
);

const startQuizButton = (
  <button id="startQuiz"
          style={styles.buttonStyle} 
          onClick={handleChange}>
  Click here to start Quiz
  </button>
);


return (
  <div className='firstPage' style={styles.zIndex}>
    {titleH1}
    <MessageBox style={styles.componentMargin}>
      {firstMessage}
    </ MessageBox>
    {startQuizButton}
  </div>)
  }

export default FirstPage;
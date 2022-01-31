import React from 'react';
import './App.css';
import Background from '../Background/Background';
import MessageBox from '../MessageBox/MessageBox';
import Button from '../Button/Button';


function App() {

  const componentMargin = {
    margin: "10px 10px",
  }

  return (
    <div className="App">
      <h1>Which Programming Language <br></br>
        Should I Learn First?</h1>
      <MessageBox style={componentMargin} />
      <Button text='test' style={componentMargin}/>
      <Background />
    </div>
  );
}



export default App;

import React, {useState} from 'react';
import './App.css';
import Background from '../Background/Background';
import FirstPage from '../FirstPage/FirstPage';
import QuizContainer from '../../Container/QuizContainer/QuizContainer';

function App() {

  const [ isStartQuiz, setIsStartQuiz ] = useState(false);

  const handleChange = () => {
    setIsStartQuiz(true)
  }

  return (
    <div className='App'>
      {!isStartQuiz ? <FirstPage handleChange={handleChange} /> : <QuizContainer /> }
      <Background />
    </div>
    
    )

}
/* 
    {!isStartQuiz && <FirstPage isStartQuiz={handleChange}/>}
    {isStartQuiz && <Quiz />}

*/


export default App;

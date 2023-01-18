import React from 'react';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstPage from './components/FirstPage';
import blob1 from './img/blob1.svg'
import blob2 from './img/blob2.svg'
import Uestions from './components/uestions';
function App() {
   const [started, setStarted] = React.useState(true)
   const [questions, setQuestions] = React.useState([])
   const [letsCheck, setLetsCheck] = React.useState(false)
   const [reset, setReset] = React.useState(false)

   function startQuiz() {
    setStarted(prev => !prev)
    
   }

   function check(questionId, answerId) {
   
    setQuestions(prev => prev.map(question => {
      return questionId === question.id ? {...question, selected_answer: answerId} : question
    }))
    
   }
   const [resets, setResets] = React.useState(0)
   React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&encode=base64')
    .then(resp => resp.json())
    .then(data => {
    
     const uestions = data.results.map((item, index) => {
      return {
        question: item.question,
        id: index,
        correct_answer: item.correct_answer,
        selected_answer: null,
        answers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5)
      }
     })
     setQuestions(uestions)
    })
    
    
   }, [resets])
   const uestions = questions.map((data, index) => {
    return <Uestions {...data} id={index} letsCheck={letsCheck} reset={reset} check={(questionId, answerId) => check(questionId, answerId)}/>
  })
 
  const [score, setScore] = React.useState(0)

  function test() {
    if(letsCheck === false) {
    setLetsCheck(prev => !prev)
    for(let i = 0; i < questions.length; i++) {
      if(questions[i].selected_answer === questions[i].correct_answer) {
        setScore(prev => prev + 1)
      }
      
    }
  }
  if(reset === true) {
    setScore(0)
    location.reload();
   
  }

  setReset(prev => !prev)
  }


  return (
    <div className="backGround">      
      <img src={blob1} alt="blob" className='blob1'></img>
      <img src={blob2} alt="blob" className='blob2'></img>
      {started && <div className='startPage'><FirstPage start={startQuiz}/></div>}
       
      {!started && <div className='questionsRendered'>
        {uestions}
        <button className='checkAnswers btn btn-primary mt-5' onClick={test}>{reset ? "Play Again" : "Check Answers"}</button>
        {letsCheck && <div className='score'>Score: {score}/5</div>}
      </div>}
    </div>
  )
}

export default App
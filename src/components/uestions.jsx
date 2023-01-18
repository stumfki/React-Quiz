import React, { useState } from 'react'
import '../css/question.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Questions(props) {
  // Add a new state variable `selectedAnswer` to store the selected answer
 
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const answers = props.answers.map((item, index) => {
    // Check if the current answer is the selected answer
    const isSelected = item === selectedAnswer

    // Set the background color based on whether the answer is selected, correct, or incorrect
    let styles
    if(isSelected) {
      styles = {backgroundColor: "#D6DBF5" }
    } else {
      styles = {backgroundColor: "#F5F7FB"}
    }
    if(props.letsCheck) {
      if(item === props.correct_answer) {
        styles = {backgroundColor: "green"}
      } else if(item !== props.correct_answer && selectedAnswer === item) {
        styles = {backgroundColor: "red"}
      }
     
    }



    return (
      <div className='question' style={styles} onClick={() => {
        // Update the selected answer when the answer is clicked
        setSelectedAnswer(item)
        // Call the check function with the selected answer
        props.check(props.id, item)
      }}>
        <h1>{atob(item)}</h1>
      </div>
    )
  })
  return (
    <div className="questionCont" >
      <h1>{atob(props.question)}</h1>
      <div className='questionList'>
        {answers}
      </div>
    </div>
  )
}
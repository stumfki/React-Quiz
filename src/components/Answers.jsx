import '../css/Answers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Answers(props) {
    const func = props.select
  


  return (
    <div className="answerList" >
        
        <div className='question' onClick={func}>
    <h2>test</h2>
    </div>
        
    </div>
  )
}



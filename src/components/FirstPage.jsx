import '../css/FirstPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FirstPage(props) {
  const styles = {
    backgroundColor: props.held ? "#59E391" : "white"
  }

  return (
    <div className="quiz">
        <h1>Quizzical</h1>
        <p>Take a fun quiz</p>
        <button className='btn btn-primary' onClick={props.start}>Start Quiz</button>
    </div>
  )
}



import React, {useState, useEffect} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [movieQuestion, setMovieQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [buttonShow, setButtonShow] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState();
  const [wrongA, setWrongA] = useState();
  const [wrongB, setWrongB] = useState();
  const [wrongC, setWrongC] = useState();
  const [timer, setTimer] = useState(46)

  
  useEffect(() => {
    setTimeout(() => {fetcher()}, 1000);
  }, [timer])
  
  const fetcher = () => {
      fetch('moviequiz.json',{
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
          }
       }
       )
      .then((res) => res.json())
      .then((data) => {
          setMovieQuestion(data.results);
          console.log(movieQuestion)
      })
      .catch((err) => console.error(err))
      
      if (timer > 0) {
          
          setTimeout(() => setTimer(timer - 1))
      }else if(timer === 0) {
          
          setCurrentIndex(currentIndex + 10)
      }
  }
  const clickHandler = () =>{
     setButtonShow(true);
  }
  const click = () => {
      setCurrentIndex(currentIndex + 1);
      setCount(count + 1)
      setButtonShow(false);
      setAnswer();
      setWrongA();
      setWrongB();
      setWrongC();
  }
   const scoreAnswer = () => {
      if(movieQuestion[currentIndex].correct_answer) {
          setScore(score + 1);
          setAnswer('correct');
      }
   }
   const wrongAnswera = () => {
      if(movieQuestion[currentIndex].incorrect_answer[0]){
         setWrongA('wronga');
      }
   }
   const wrongAnswerb = () => {
      if(movieQuestion[currentIndex].incorrect_answer[1]){
         setWrongB('wrongb');
      }
   }
   const wrongAnswerc = () => {
      if(movieQuestion[currentIndex].incorrect_answer[2]){
         setWrongC('wrongc');
      }
   }
   const restart = () => {
      window.location.reload()
   }
  
  return (
    <div className="App">
      <Header/>
      <Content
        movieQuestion={movieQuestion}
        currentIndex={currentIndex}
        count={count}
        buttonShow={buttonShow}
        answer={answer}
        wrongA={wrongA}
        wrongB={wrongB}
        wrongC={wrongC}
        wrongAnswera={wrongAnswera}
        wrongAnswerb={wrongAnswerb}
        wrongAnswerc={wrongAnswerc}
        click={click}
        clickHandler={clickHandler}
        scoreAnswer={scoreAnswer}
        score={score}
        timer={timer}
        restart={restart}
      />
      <Footer/>
    </div>
  );
}

export default App;


import React from "react";

const Content = ({
    movieQuestion,
    currentIndex,
    count,
    buttonShow,
    score,
    wrongA,
    wrongB,
    wrongC,
    wrongAnswera,
    wrongAnswerb,
    wrongAnswerc,
    click,
    clickHandler,
    answer,
    scoreAnswer,
    timer,
    restart

}) => {
   
  return (
    <main className='main-question'>
        
        {movieQuestion.length > 0 ? (
            <div className="question-containter">
                
                <div className='movie-content'>
                    {currentIndex >= movieQuestion.length ? (<div className="end">
                        <h1>Game Over</h1>
                        <h3>{`You scored ${score}/${movieQuestion.length}`}</h3>
                        <button className="restart" onClick={restart}>Restart</button>
                        </div>) : (

                        <><div className="timer">
                            <h2 className="timer-h2">{timer}s<span> to answer all questions</span></h2>
                        </div>

                        <div className="question">
                                
                              <h2>{movieQuestion[currentIndex].question}</h2>
                          </div><div className="option" onClick={clickHandler}>
                                  <button className={answer} onClick={scoreAnswer}>{movieQuestion[currentIndex].correct_answer}</button>
                                  <button className={wrongA} onClick={wrongAnswera}>{movieQuestion[currentIndex].incorrect_answer[0]}</button>
                                  <button className={wrongB}  onClick={wrongAnswerb}>{movieQuestion[currentIndex].incorrect_answer[1]}</button>
                                  <button className={wrongC}  onClick={wrongAnswerc}>{movieQuestion[currentIndex].incorrect_answer[2]}</button>
                              </div><div className="others">
                                  <h3>{`Questions ${count}/${movieQuestion.length}`}</h3>
                                  {buttonShow ? <button className="next-q" onClick={() => click()}>Next</button> : null}
                              </div></>
                    )}
                </div>
                
                
            </div>
        ):(<div className="question-containter"><p>Loading...</p></div>)}
    </main>
  )
}

export default Content
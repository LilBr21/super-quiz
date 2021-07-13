import React, { useState } from 'react'; 

//import Button from '../UI/Button';
import Header from '../Header';
import Score from '../Score';
import Hint from './Hints/Hint';
import HintsLeft from './Hints/HintsLeft';

import './answerform.style.css';
// import '../UI/button.style.css';

const AnswerForm = (props) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [answerResult, setAnswerResult] = useState('');
    const [currentMovie, setCurrentMovie] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(0);
    const [score, setScore] = useState(0);
    const [disable, setDisable] = useState(false);
    const [howManyHints, setHowManyHints] = useState(3)

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value);
    }

    let correctAnswer = props.answers[currentAnswer];

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userAnswer);

        // let correctAnswer = props.answers[currentAnswer];

        if (userAnswer === correctAnswer) {
            setAnswerResult('Correct!');
            setScore(prev => prev + 1);
            setDisable(true);
        } else {
            setAnswerResult('Try again');
        }

    };

    const changeMovieHandler = (event) => {
        event.preventDefault();
        setCurrentMovie(prev => (prev + 1) % 9);

        setCurrentAnswer(prev => (prev + 1) % 9);

        setUserAnswer('');
        setAnswerResult('');
        setDisable(false);
    };

    

    const countHintsLeftHandler = (hintsLeft) => {
        console.log(hintsLeft);
        setHowManyHints(hintsLeft);
    };

    return (
        <React.Fragment>
            <Header />
            <div className='game-stats'>
                <Score score={score}/>
                <HintsLeft hintsleft={howManyHints}/>
            </div>
            <p className='emojis'>{props.films[currentMovie]}</p>
            <div className='result-container'>
                <p 
                    className='answerResult' 
                    value={answerResult}>
                    {answerResult}
                </p>
            </div>
            <form className='answerBody'>
                <div className='container'>
                <input 
                    className='answerField' 
                    type='text' 
                    onChange={answerChangeHandler}
                    value={userAnswer}
                ></input>
                <button 
                    className='buttoncheck' 
                    type='submit' 
                    onClick={submitHandler} 
                    disabled={disable}>
                    Check
                </button>
                <div className='bottombuttons'>
                    <button 
                        className='nextButton' 
                        onClick={changeMovieHandler}>
                        Next
                    </button>
                    <Hint 
                        hintnumber={currentMovie}  
                        onCountHintsLeft={countHintsLeftHandler}
                    />
                </div>
                </div>
            </form>
        </React.Fragment>
    )
};

export default AnswerForm;
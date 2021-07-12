import React, { useState } from 'react'; 

//import Button from '../UI/Button';
import Score from '../Score';

import './answerform.style.css';
import '../UI/button.style.css';

const AnswerForm = (props) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [answerResult, setAnswerResult] = useState('');
    const [currentMovie, setCurrentMovie] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(0);
    const [score, setScore] = useState(0);
    const [disable, setDisable] = useState(false);

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
            setAnswerResult('Wrong');
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

    return (
        <React.Fragment>
            <Score score={score}/>
            <p className='emojis'>{props.films[currentMovie]}</p>
            <p className='answerResult' value={answerResult}>{answerResult}</p>
            <form className='answerBody'>
                <input 
                    className='answerField' 
                    type='text' 
                    onChange={answerChangeHandler}
                    value={userAnswer}
                ></input>
                <button className='buttoncheck' type='submit' onClick={submitHandler} disabled={disable}>Check</button>
                <button className='nextButton' onClick={changeMovieHandler}>Next</button>
            </form>
        </React.Fragment>
    )
};

export default AnswerForm;
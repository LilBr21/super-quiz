import React, { useState } from 'react'; 

import Button from '../UI/Button';

import './answerform.style.css';

const AnswerForm = (props) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [answerResult, setAnswerResult] = useState('');
    const [currentMovie, setCurrentMovie] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(0);

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userAnswer);

        let correctAnswer = props.answers[currentAnswer];

        if (userAnswer === correctAnswer) {
            setAnswerResult('Correct!');
        } else {
            setAnswerResult('Wrong');
        }

    };

    const changeMovieHandler = (event) => {
        event.preventDefault();
        setCurrentMovie(prev => (prev + 1) % 3);

        setCurrentAnswer(prev => (prev + 1) % 3);

        setUserAnswer('');
        setAnswerResult('');
    };

    return (
        <React.Fragment>
            <p className='emojis'>{props.films[currentMovie]}</p>
            <p className='answerResult' value={answerResult}>{answerResult}</p>
            <form className='answerBody'>
                <input 
                    className='answerField' 
                    type='text' 
                    onChange={answerChangeHandler}
                    value={userAnswer}
                ></input>
                <Button type='submit' onClick={submitHandler}>Check</Button>
                <button className='nextButton' onClick={changeMovieHandler}>Next</button>
            </form>
        </React.Fragment>
    )
};

export default AnswerForm;
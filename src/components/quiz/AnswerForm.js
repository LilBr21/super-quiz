import React, { useState } from 'react'; 

import Button from '../UI/Button';
import { MOVIES } from '../movies/Movies';
import './answerform.style.css';

const AnswerForm = () => {
    const [userAnswer, setUserAnswer] = useState('');
    const [answerResult, setAnswerResult] = useState('');

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userAnswer);

        const correctAnswer = MOVIES[0].answer;

        if (userAnswer === correctAnswer) {
            setAnswerResult('Correct!');
        } else {
            setAnswerResult('Wrong');
        }
    };

    return (
        <React.Fragment>
            <p className='answerResult'>{answerResult}</p>
            <form onSubmit={submitHandler} className='answerBody'>
                <input className='answerField' type='text' onChange={answerChangeHandler}></input>
                <Button type='submit'>Check</Button>
            </form>
        </React.Fragment>
    )
};

export default AnswerForm;
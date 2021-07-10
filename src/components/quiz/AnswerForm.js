import React, { useState } from 'react'; 

import Button from '../UI/Button';
import { MOVIES } from '../movies/Movies';

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
            <p>{answerResult}</p>
            <form onSubmit={submitHandler}>
                <input type='text' onChange={answerChangeHandler}></input>
                <Button type='submit'>Check</Button>
            </form>
        </React.Fragment>
    )
};

export default AnswerForm;
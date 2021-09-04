import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../store/index';

import Header from '../Header';
import Score from '../Score';
import Hint from './Hints/Hint';
import HintsLeft from './Hints/HintsLeft';
import EndPage from '../EndPage';

import './answerform.style.css';

const AnswerForm = (props) => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.score);
    const answerResult = useSelector(state => state.answerResult);

    const [userAnswer, setUserAnswer] = useState('');
    // const [answerResult, setAnswerResult] = useState('');
    const [currentMovie, setCurrentMovie] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(0);
    // const [score, setScore] = useState(0);
    const [disable, setDisable] = useState(false);
    const [howManyHints, setHowManyHints] = useState(3);
    const [showAnswerForm, setShowAnswerForm] = useState(true);
    const [showEndPage, setShowEndPage] = useState(false);

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value);
    }

    let correctAnswer = props.answers[currentAnswer];

    const submitHandler = (event) => {
        event.preventDefault();

        if (userAnswer.toLowerCase() === correctAnswer) {
            // setAnswerResult('Correct!');
            // setScore(prev => prev + 1);
            dispatch(quizActions.increment())
            setDisable(true);
        } else {
            // setAnswerResult('Try again');
            dispatch(quizActions.wrongAnswer());
        }

    };

    const changeMovieHandler = (event) => {
        event.preventDefault();
        setCurrentMovie(prev => (prev + 1) % 10);

        setCurrentAnswer(prev => (prev + 1) % 10);

        setUserAnswer('');
        // setAnswerResult('');
        dispatch(quizActions.changeMovie());
        setDisable(false);

        if (currentMovie === 9) {
            setShowAnswerForm(false);
            setShowEndPage(true);
        }
    };

    const countHintsLeftHandler = (hintsLeft) => {
        setHowManyHints(hintsLeft);
    };



    return (
        <React.Fragment>
            <Header />
            {showAnswerForm ? <div>
            <div className='game-stats'>
                <Score score={score}/>
                <HintsLeft hintsleft={howManyHints}/>
            </div>
            <p className='emojis'>{props.films[currentMovie]}</p>
            <div className='result-container'>
                <p 
                    className='answer-result' 
                    value={answerResult}>
                    {answerResult}
                </p>
            </div>
            <form className='answer-body'>
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
                        className='next-button' 
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
            </div> : null}
            {showEndPage ? <EndPage finalscore={score}/> : null}
        </React.Fragment>
    )
};

export default AnswerForm;
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
    const currentMovie = useSelector(state => state.currentMovie);
    const currentAnswer = useSelector(state => state.currentAnswer);
    const disable = useSelector(state => state.disable);
    const showAnswerForm = useSelector(state => state.showAnswerForm);
    const showEndPage = useSelector(state => state.showEndPage);

    const [userAnswer, setUserAnswer] = useState('');
    const [howManyHints, setHowManyHints] = useState(3);

    const answerChangeHandler = (event) => {
        setUserAnswer(event.target.value);
    }
    
    let correctAnswer = props.movies[currentAnswer].title;

    const submitHandler = (event) => {
        event.preventDefault();

        if (userAnswer.toLowerCase() === correctAnswer) {
            dispatch(quizActions.increment())
        } else {
            dispatch(quizActions.wrongAnswer());
        }

    };

    const changeMovieHandler = (event) => {
        event.preventDefault();
        setUserAnswer('');
        dispatch(quizActions.changeMovie());

        if (currentMovie === 9) {
            dispatch(quizActions.endQuiz());
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
            <p className='emojis'>{props.movies[currentMovie].emojis}</p>
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
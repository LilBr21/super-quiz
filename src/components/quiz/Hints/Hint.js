import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quizActions } from '../../../store/index';


import './hint.styles.css';

let hints = [
    'Movie created by Tarantino with famous dance scene and delicious quarter pounders.',
    'Celine Dion sang "My heart will go on" especially for this movie.',
    'A movie about fast running guy, who was in Vietnam and made shrimp business.',
    'A story about Hannibal Lecter and young FBI agent.',
    'A movie about blind man who meets a special woman. Famous tango dance.',
    'A story about young boy who sees dead people.',
    'A movie about stuttering king.',
    'A movie about a guy who becomes extremly rich and then slowly looses everything',
    'A movie about a man who has been born old, and then becomes younger over time'
]

const Hint = (props) => {
    const dispatch = useDispatch();
    const hintsLeft = useSelector(state => state.hintsLeft);

    const [isShown, setIsShown] = useState(false);
    const [disable, setDisable] = useState(false);

    const showHintHandler = (event) => {
        event.preventDefault();
        setIsShown(true);
        dispatch(quizActions.useHint());

        if (hintsLeft === 0) {
            setDisable(true);
        };
        props.onCountHintsLeft(hintsLeft);
    };

    const hideHintHandler = (event) => {
        event.preventDefault();
        setIsShown(false);
    };

    return (
        <div>
        <div className="hint-wrapper">
            <button 
                className='hint-btn' 
                onClick={showHintHandler} 
                disabled={disable}>
                Hint?
            </button>
            { isShown ? <div className="hint-card">
                <button 
                    onClick={hideHintHandler} 
                    className='closing-btn'>
                    x
                </button>
                <p className='hint-text'>{hints[props.hintnumber]}</p>
            </div> : null}
        </div>
        </div>
    )
};

export default Hint;
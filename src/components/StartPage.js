import React from 'react';

import Header from './Header';

import './startpage.styles.css';

const StartPage = (props) => {
    const startQuiz = (event) => {
        event.preventDefault();
        props.onShowQuizHandler()
    };

    return (
        <div>
            <Header />
            <h3 className='welcome-msg'>Welcome to the movie quiz game!</h3>
            <p className='quiz-description'>
                In a short time you'll see a set of emojis on the screen. 
                Your task is to recognize the title of the represented movie.
                Only English titles will be taken as correct.
            </p>
            <p className='quiz-description'>Have fun!</p>
            <button className='start-btn' onClick={startQuiz}>Start</button>
        </div>
    )

};

export default StartPage;
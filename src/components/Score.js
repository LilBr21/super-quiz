import React from 'react';

import './score.styles.css';

const Score = (props) => {
    
    return (
        <div className='score-container'>
            <p className='score'>Points: {props.score}</p>
        </div>

    )

};

export default Score;
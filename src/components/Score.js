import React from 'react';

import './score.styles.css';

const Score = (props) => {
    let score = props.score;

    return (
        <div>
            <p className='score'>Points: {score}</p>
        </div>

    )

};

export default Score;
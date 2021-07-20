import React from 'react';

import './endpage.styles.css';

const EndPage = (props) => {
    return (
            <div className='final-score'>
                <h3>Congratulations!</h3>
                <p>Your score: {props.finalscore} / 10 points</p>
            </div>
    )
};

export default EndPage;
import React from 'react';

import './hintsleft.styles.css';

const HintsLeft = (props) => {
    let hintsLeft = props.hintsleft;

    return (
        <div className='hints-left-container'>
            <p className='hints-left'>Hints left: {hintsLeft}</p>
        </div>

    )

};

export default HintsLeft;
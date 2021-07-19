import React from 'react';

import './hintsleft.styles.css';

const HintsLeft = (props) => {

    return (
        <div className='hints-left-container'>
            <p className='hints-left'>Hints left: {props.hintsleft}</p>
        </div>

    )

};

export default HintsLeft;
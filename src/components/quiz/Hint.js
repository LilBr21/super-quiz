import React, { useState } from 'react';

import './hint.styles.css';


const Hint = (props) => {
    const [isShown, setIsShown] = useState(false);

    const showHintHandler = (event) => {
        event.preventDefault();
        setIsShown(true);
    }

    const hideHintHandler = (event) => {
        event.preventDefault();
        setIsShown(false);
    }

    return (
        <div className="hint-wrapper">
            <button className='hint-btn' onClick={showHintHandler}>Hint?</button>
            { isShown ? <div className="hint-card">
                <button onClick={hideHintHandler} className='closing-btn'>x</button>
                <p></p>
            </div> : null}
        </div>
    )
};

export default Hint;
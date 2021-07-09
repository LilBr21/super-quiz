import React, { useState } from 'react';

const AnswerForm = () => {
    const [userAnswer, setUserAnswer] = useState('');

    return (
        <form onSubmit={setUserAnswer}>
            <input type='text'></input>
            <button>Check</button>
        </form>
    )
};

export default AnswerForm;
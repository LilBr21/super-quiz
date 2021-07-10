import React from 'react';

import './button.style.css';

const Button = (props) => {
    return (
        <button
            className='buttoncheck'
            type={props.type || 'button'}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
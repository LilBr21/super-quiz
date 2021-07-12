import React from 'react';

import AnswerForm from '../quiz/AnswerForm';

export const MOVIES = [
    {
        id: 1,
        emojis: ['🍔', ' ', '💉', ' ', '🔫'],
        name: 'pulp fiction',
        answer: 'pulp fiction',
        hint: 'Movie created by Tarantino with famous dance scene and delicious burgers'
    },
    {
        id: 2,
        emojis: ['💔', ' ', '🚢', ' ', '❄'],
        answer: 'titanic',
        hint: 'Celine Dion sang "My heart will go on" especially for this movie'
    },
    {
        id: 3,
        emojis: ['🍫', ' ', '💔', ' ', '🏃‍♂️', ' ', '🍤', ' ', '🇻🇳', ],
        answer: 'forrest gump',
        hint: 'A movie about fast running guy, who was in Vietnam and made shrimp business'
    }
];

const pulpFiction = ['🍔', ' ', '💉', ' ', '🔫'];
const titanic = ['💔', ' ', '🚢', ' ', '🌊', ' ', '🥶', ' ', '🚪'];
const forrestGump = ['🍫', ' ', '💔', ' ', '🏃‍♂️', ' ', '🍤', ' ', '🇻🇳', ];



const MovieRiddle = () => {
    let films = [pulpFiction, titanic, forrestGump];
    let answers = ['pulp fiction', 'titanic', 'forrest gump'];
    
    return (
        <div>
            <AnswerForm answers={answers} films={films}/>
        </div>
    )
};


export default MovieRiddle;
import React, { useState } from 'react';

//const movieId = Math.random().toString();

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
const titanic = ['💔', ' ', '🚢', ' ', '❄'];
const forrestGump = ['🍫', ' ', '💔', ' ', '🏃‍♂️', ' ', '🍤', ' ', '🇻🇳', ];

let films = [pulpFiction, titanic, forrestGump]


const MovieRiddle = () => {
    
    const [currentMovie, setCurrentMovie] = useState(0);

    const changeMovieHandler = () => {
        setCurrentMovie(prev => (prev + 1) % 3);
        console.log(currentMovie);
    };


    return (
        <div>
            <p>{films[currentMovie]}</p>
            <button onClick={changeMovieHandler}>Next</button>
        </div>
    )
};


export default MovieRiddle;
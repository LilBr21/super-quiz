import React from 'react';

import AnswerForm from '../quiz/AnswerForm';

// export const MOVIES = [
//     {
//         id: 1,
//         emojis: ['🍔', ' ', '💉', ' ', '🔫'],
//         name: 'pulp fiction',
//         answer: 'pulp fiction',
//         hint: 'Movie created by Tarantino with famous dance scene and delicious burgers'
//     },
//     {
//         id: 2,
//         emojis: ['💔', ' ', '🚢', ' ', '❄'],
//         answer: 'titanic',
//         hint: 'Celine Dion sang "My heart will go on" especially for this movie'
//     },
//     {
//         id: 3,
//         emojis: ['🍫', ' ', '💔', ' ', '🏃‍♂️', ' ', '🍤', ' ', '🇻🇳', ],
//         answer: 'forrest gump',
//         hint: 'A movie about fast running guy, who was in Vietnam and made shrimp business'
//     }
// ];

const pulpFiction = ['🍔', ' ', '💉', ' ', '🔫'];
const titanic = ['💔', ' ', '🚢', ' ', '🌊', ' ', '🥶', ' ', '🚪'];
const forrestGump = ['🍫', ' ', '💔', ' ', '🏃‍♂️', ' ', '🍤', ' ', '🇻🇳'];
const theSilenceOfTheLambs = ['🗣', ' ', '❌', ' ', '🐑'];
const scentOfAWoman = ['🧑‍🦯', ' ', '👃', ' ', '👩', ' ', '💃', ' ', '🕺'];
const theSixthSense = ['👦', ' ', '👀', ' ', '👻'];
const theKingsSpeech = ['🗣', ' ', '❌', ' ', '🎙', ' ', '👑'];
const theWoolfOfWallStreet = ['🐺', ' ', '🧔', ' ', '💉', ' ', '💰', ' ', '🏙'];
const caseOfBenjaminButton = ['👴', ' ', '➡', ' ', '👶'];



const MovieRiddle = () => {
    let films = [
        pulpFiction, 
        titanic, 
        forrestGump, 
        theSilenceOfTheLambs, 
        scentOfAWoman,
        theSixthSense,
        theKingsSpeech,
        theWoolfOfWallStreet,
        caseOfBenjaminButton
    ];

    let answers = [
        'pulp fiction', 
        'titanic', 
        'forrest gump', 
        'the silence of the lambs',
        'scent of a woman',
        'the sixth sense',
        'the kings speech', //ogarnij jak zrobic apostrof
        'the wolf of wall street',
        'the curious case of benjamin button'
    ];
    
    return (
        <div>
            <AnswerForm answers={answers} films={films}/>
        </div>
    )
};


export default MovieRiddle;
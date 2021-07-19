import React from 'react';

import AnswerForm from '../quiz/AnswerForm';

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

    let titles = [
        "pulp fiction", 
        "titanic", 
        "forrest gump", 
        "the silence of the lambs",
        "scent of a woman",
        "the sixth sense",
        "the king's speech", 
        "the wolf of wall street",
        "the curious case of benjamin button"
    ];

    
    return (
        <div>
            <AnswerForm 
                answers={titles} 
                films={films} 
            />
        </div>
    )
};


export default MovieRiddle;
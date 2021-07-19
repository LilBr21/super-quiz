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
const harryPotter = ['🧙', ' ', '🪄', ' ', '🏰', ' ', '🐉', ' ', '🧹', ' ', '⚡'];



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
        caseOfBenjaminButton,
        harryPotter
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
        "the curious case of benjamin button",
        "harry potter"
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
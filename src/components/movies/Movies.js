import React from 'react';
import { useEffect, useState } from 'react';

import AnswerForm from '../quiz/AnswerForm';

const MovieRiddle = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://movie-quiz-39716-default-rtdb.firebaseio.com/movies.json');
            const responseData = await response.json();
            let loadedMovies = [];
            for (let key of Object.keys(responseData)) {
                loadedMovies.push({
                    id: key,
                    title: responseData[key].title,
                    emojis: responseData[key].emojis
                });
            }
            setMovies(loadedMovies)
        };
        fetchMovies()
    }, []);
    
    return (
        <div>
            {movies[1] !== undefined ?
            <AnswerForm 
                movies={movies}
            /> : null }
        </div>
    )
};


export default MovieRiddle;
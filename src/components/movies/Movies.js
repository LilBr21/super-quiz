
const movieId = Math.random().toString();

export const MOVIES = [
    {
        id: movieId,
        emojis: ['🍔', ' ', '💉', ' ', '🔫'],
        name: 'pulp fiction',
        answer: 'pulp fiction',
        hint: 'Movie created by Tarantino with famous dance scene and delicious burgers'
    },
    {
        id: movieId,
        emojis: ['💔', ' ', '🚢', ' ', '❄'],
        answer: 'titanic',
        hint: 'Celine Dion sang "My heart will go on" especially for this movie'
    },
    {
        id: movieId,
        emojis: ['🍫', ' ', '💔', ' ', '🏃‍♂️', ' ', '🍤', ' ', '🇻🇳', ],
        answer: 'forrest gump',
        hint: 'A movie about fast running guy, who was in Vietnam and made shrimp business'
    }
];

const MovieRiddle = () => {
    const shownMovie = MOVIES[0].emojis;
    return (
        <div>
            <p>{shownMovie}</p>
        </div>
    )
};

export default MovieRiddle;
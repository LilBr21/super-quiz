import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { score: 0, answerResult: ''};

const quizSlice = createSlice({
    name: 'quiz-state',
    initialState,
    reducers: {
        increment(state) {
            state.score = state.score + 1;
            state.answerResult = 'Correct';
        },
        wrongAnswer(state) {
            state.answerResult = 'Try Again';
        },
        changeMovie(state) {
            state.answerResult = '';
        }
    }
})

// const scoreReducer = (state = initialState, action) => {
    // if (action.type === 'increment') {
    //     return {
    //         score: state.score + 1,
    //         answerResult: 'Correct!'
    //     };
    // }

    // if (action.type === 'wrong-answer') {
    //     return {
    //         answerResult: 'Try again',
    //         score: state.score
    //     };
    // }

    // if (action.type === 'change-movie') {
    //     return {
    //         answerResult: '',
    //         score: state.score
    //     }
    // }

//     return state;
// };

const store = configureStore({
    reducer: quizSlice.reducer
});

export const quizActions = quizSlice.actions;
export default store;
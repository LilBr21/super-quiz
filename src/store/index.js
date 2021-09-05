import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { 
    score: 0, 
    answerResult: '', 
    currentMovie: 0,
    currentAnswer: 0,
    hintsLeft: 2,
    disable: false,
    showAnswerForm: true,
    showEndPage: false
};

const quizSlice = createSlice({
    name: 'quiz-state',
    initialState,
    reducers: {
        increment(state) {
            state.score = state.score + 1;
            state.answerResult = 'Correct';
            state.disable = true;
        },
        wrongAnswer(state) {
            state.answerResult = 'Try Again';
        },
        changeMovie(state) {
            state.answerResult = '';
            state.currentMovie = (state.currentMovie + 1) % 10;
            state.currentAnswer = (state.currentAnswer + 1) % 10;
            state.disable = false;
        },
        useHint(state) {
            state.hintsLeft = state.hintsLeft - 1;
        },
        endQuiz(state) {
            state.showAnswerForm = false;
            state.showEndPage = true;
        }
    }
})

const store = configureStore({
    reducer: quizSlice.reducer
});

export const quizActions = quizSlice.actions;
export default store;
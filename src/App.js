import React, { useState } from 'react';

import MovieRiddle from './components/movies/Movies';
import StartPage from './components/StartPage';

import './App.css';



function App() {
  const [showStartPage, setShowStartPage] = useState(true);
  const [showQuiz, setShownQuiz] = useState(false);

  const showQuizHandler = () => {
        setShowStartPage(false);
        setShownQuiz(true)
  }

  return (
    <div className="App">
      { showQuiz ? <MovieRiddle /> : null }
      { showStartPage ? <StartPage onShowQuizHandler={showQuizHandler}/> : null }
    </div>
  );
}

export default App;

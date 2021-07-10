import Header from './components/Header';
import AnswerForm from './components/quiz/AnswerForm';
//import Hint from './components/quiz/Hint';

import MovieRiddle from './components/movies/Movies';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieRiddle />
      <AnswerForm />
    </div>
  );
}

export default App;

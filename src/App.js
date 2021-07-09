import Header from './components/Header';
import AnswerForm from './components/quiz/AnswerForm';
import Hint from './components/quiz/Hint';
import NextMovie from './components/quiz/NextMovie';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <AnswerForm />
      <div>
        <Hint />
        <NextMovie />
      </div>
    </div>
  );
}

export default App;

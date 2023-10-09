import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { WordCounter } from './components/wordCounter';
function App() {
  return (
    <div className="App custom-container mt-5">
      <WordCounter />
    </div>
  );
}

export default App;

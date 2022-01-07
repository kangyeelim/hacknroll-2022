import cow from './cow.png';
import moon from './moon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cow} className="jump" alt="logo" />
        <img src={moon} className="App-logo" alt="logo" />
        <p>
          Press space to start counting!
        </p>
        <a
          className="App-link"
          href="https://hacknroll.nushackers.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join HACK&ROLL 2022!
        </a>
      </header>
    </div>
  );
}

export default App;

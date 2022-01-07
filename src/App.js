import logo from './cow.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="jump" alt="logo" />
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

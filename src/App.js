import logo from './hacknroll.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="jump" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://hacknroll.nushackers.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join HACK&ROLL 2022
        </a>
      </header>
    </div>
  );
}

export default App;

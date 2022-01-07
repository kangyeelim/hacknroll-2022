import CowJump from './CowJump.js';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }

  setState() {
    this.state.count = this.state.count + 1;
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <CowJump count={this.state.count}/>
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
    
}

export default App;

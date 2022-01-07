import CowJump from './CowJump.js';
import moon from './moon.png';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello")
    this.state = {
       count: 0
    }
 }
  updateCount() {
    this.setState({count: this.state.count + 1})
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      <CowJump count={this.state.count}/>
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
      <button onClick={this.updateCount()}> Jump </button>
      </header>
      </div>
      );
  }
    
}

export default App;

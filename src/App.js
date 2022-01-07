import CowJump from './CowJump.js';
import moon from './moon.png';
import './App.css';
import React from 'react';
import './CowJump.css';
import logo from './cow.png';


class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello")
    this.state = {
      count:0,
      animate:false
    }
 }
  updateCount() {
    this.setState({count: this.state.count + 1})
  }


  setAnimateTrue() {
    this.setState({animate: false});
  }

  updateCount() {
    this.setState((prevState) => ( {count: prevState.count + 1, animate: true} ));
    setTimeout(1000);
    this.setAnimateTrue();
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      {this.state.animate && (<div> <p>You have jumped {this.state.count} times</p>
          <img src={logo} className="jump" alt="logo" /> 
          </div>)} 
       {/* <CowJump count={this.state.count} forceUpdate={this.state.forceUpdate}/>  */}
      <img src={moon} className="App-logo" alt="logo" />
      <p>
        Press space to start counting!
      </p>
      <button onClick={() => this.updateCount()}> Jump! </button>
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

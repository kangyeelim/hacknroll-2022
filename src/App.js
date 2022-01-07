import CowJump from './CowJump.js';
import moon from './moon.png';
import './App.css';
import React from 'react';
import './CowJump.css';
import cow from './cow.png';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      animate:0
    }
 }
  
  setAnimateFalse() {
    this.setState({animate: false});
  }

  updateCount() {
     this.setState((prevState) => ( {count: prevState.count + 1, animate: true} )); 
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <p>You have jumped {this.state.count} times</p>
      {this.state.animate? (<div> 
          <img src={cow} className="jump" alt="logo" onAnimationEnd={() => this.setAnimateFalse()}/> 
          </div>): <div></div>} 
      <img src={moon} className="spin" alt="logo" />
      <p>
        Can't sleep? Start counting the number of cows that jumped over the moon!
      </p>
      <button onClick={() => this.updateCount()}> Jump! </button>
      </header>
      </div>
      );
  }
}

export default App

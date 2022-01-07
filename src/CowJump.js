import React from 'react';
import logo from './cow.png';
import './CowJump.css';

class CowJump extends React.Component {
    render() {
        return (
          <div> <p>You have jumped {this.props.count} times</p>
          <img src={logo} className="jump" alt="logo" /> 
          </div>  
        );
    }
}

export default CowJump;
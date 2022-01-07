import React from 'react';
import logo from './cow.png';
import './CowJump.css';

class CowJump extends React.Component {
    render() {
        return (
          <div><img src={logo} className="jump" alt="logo" />
            <p>You have jumped {this.props.count} times</p>
          </div>  
        );
    }
}

export default CowJump;
import './stap2.css';
import React, { Component } from 'react';

class Stap2 extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.location.state);

    return (
      <div>
        <h2>Plat:</h2>
      </div>
    );
  }
}

export default Stap2;
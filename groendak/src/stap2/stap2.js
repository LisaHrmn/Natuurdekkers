import './stap2.css';
import React, { Component } from 'react';

class Stap2 extends Component {
  constructor() {
    super()

    this.state = {recommendation: "", done: false};
  }

  render() {
    return (
      <div>
        <h2>Aanbeveling: {this.props.location.state.recommendation}</h2>
      </div>
    );
  }
}

export default Stap2;
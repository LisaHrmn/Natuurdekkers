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
        <h3>Min prijs: {this.props.location.state.prijsMin}</h3>
        <h3>Max prijs: {this.props.location.state.prijsMax}</h3>
      </div>
    );
  }
}

export default Stap2;
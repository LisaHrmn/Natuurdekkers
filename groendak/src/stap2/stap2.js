import React, { Component } from 'react';

class Stap2 extends Component {
  constructor() {
    super()

    this.state = {recommendation: "", done: false};
  }

  render() {
    return (
      <div className='text-center'>
        <h2 className='pt-3'>Aanbeveling: {this.props.location.state.recommendation} dak</h2>
        <h3 className='pt-3'><span className='text-green-600'>Minimale prijs:</span> {this.props.location.state.prijsMin} euro</h3>
        <h3 className='pt-3'><span className='text-green-600'>Maximale prijs:</span> {this.props.location.state.prijsMax} euro</h3>
      </div>
    );
  }
}

export default Stap2;
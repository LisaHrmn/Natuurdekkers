import React, { Component } from 'react';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'

class Stap2 extends Component {
  constructor() {
    super()

    this.state = {recommendation: "", done: false};
  }

  render() {
    let image;
    switch(this.props.location.state.recommendation) {
      case 'Economisch':
        image= <img src={eco} className='m-auto sm:w-1/3 h-auto' alt='Eco groendak'/>
      break
      case 'Natuur':
        image= <img src={natuur} className='m-auto sm:w-1/3 h-auto' alt='Natuur groendak'/> 
      break
      case 'Lichtgewicht':
        image= <img src={licht} className='m-auto sm:w-1/3 h-auto' alt='Lichtgewicht groendak'/>
      break
      case 'Solar':
        image= <img src={solar} className='m-auto sm:w-1/3 h-auto' alt='Solar groendak'/>
      break
      default:
        image= <img src={hellend} className='m-auto sm:w-1/3 h-auto' alt='Hellend groendak'/>
    }
    return (
      <div className='text-center'>
        <h2 className='py-3'>Aanbeveling: {this.props.location.state.recommendation} dak</h2>
        {image}
        <h3 className='pt-3'><span className='text-green-600'>Minimale prijs:</span> {this.props.location.state.prijsMin} euro</h3>
        <h3 className='pt-3 pb-4'><span className='text-green-600'>Maximale prijs:</span> {this.props.location.state.prijsMax} euro</h3>
      </div>
    );
  }
}

export default Stap2;
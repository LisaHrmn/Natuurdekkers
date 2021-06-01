import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'

class Stap2 extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {recommendation: "", done: false};
  }

  handleSubmit(event) {
    event.preventDefault();
    let prediction = this.props.location.state.recommendation;
    console.log(prediction)

    this.setState({
      recommendation: prediction,
      done: true
    }, () => {
      return this.state;
    });
    this.props.history.push('/3');
  }

  render() {
    let image;
    let link;
    switch(this.props.location.state.recommendation) {
      case 'Economisch':
        image= <img src={eco} className='m-auto sm:w-1/3 h-auto' alt='Eco groendak'/>
        link=  <Link to={`/Vervolgeconomisch`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>Plat dak</Link>
      break
      case 'Natuur':
        image= <img src={natuur} className='m-auto sm:w-1/3 h-auto' alt='Natuur groendak'/>
        link=  <Link to={`/Vervolgnatuur`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>Plat dak</Link>
      break
      case 'Licht hellend':
        image= <img src={licht} className='m-auto sm:w-1/3 h-auto' alt='Lichtgewicht groendak'/>
        link=  <Link to={`/Vervolglichthellend`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>Plat dak</Link>
      break
      case 'Schuin Hellend':
        image= <img src={licht} className='m-auto sm:w-1/3 h-auto' alt='Lichtgewicht groendak'/>
        link=  <Link to={`/Vervolgschuinhellend`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>Plat dak</Link>
        break
      case 'Solar':
        image= <img src={solar} className='m-auto sm:w-1/3 h-auto' alt='Solar groendak'/>
        link=  <Link to={`/Vervolgsolar`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>Plat dak</Link>

        break
      default:
        image= <img src={hellend} className='m-auto sm:w-1/3 h-auto' alt='Hellend groendak'/>
        link=  <Link to={`/Vervolghellend`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>Hellend dak</Link>
    }
    return (
      <div className='text-center'>
        <h2 className='py-3'>Aanbeveling: {this.props.location.state.recommendation} dak</h2>
        {image}
        <p>{this.props.location.state.waarom}</p>
        {link}
      </div>
    );
  }
}

export default Stap2;
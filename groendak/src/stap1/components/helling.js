import '../stap1.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Helling extends Component {
  prediction;

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {recommendation: "", prijsMin: "", prijsMax: "", done: false};
  }

  handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    let graden = document.getElementById("graden").value;
    let oppervlak = document.getElementById("oppervlak").value;

    let prijsMin = oppervlak * 40;
    let prijsMax = oppervlak * 70;



    if(graden >= 1 && graden <= 15)
    {
      console.log("Dakbegroeiing zonder schuifbeveiligingsysteem");
      this.prediction = "Dakbegroeiing zonder schuifbeveiligingsysteem";
    }
    else if(graden >= 16 && graden <= 35)
    {
      console.log("Dakbegroeiing met schuifbeveiligingsysteem afsteuning in de goot/dakrand");
      this.prediction = "Dakbegroeiing met schuifbeveiligingsysteem afsteuning in de goot/dakrand";
    }
    else if(graden >= 36 && graden <= 40)
    {
      console.log("Dakbegroeiing met schuifbeveiligingsysteem afsteuning tegen dakrand");
      this.prediction = "Dakbegroeiing met schuifbeveiligingsysteem afsteuning tegen dakrand";
    }
    else if(graden >= 41 && graden <= 45)
    {
      console.log("Dakbegroeiing met schuifbeveiligingsysteem bevestigd aan onderconstructie");
      this.prediction = "Dakbegroeiing met schuifbeveiligingsysteem bevestigd aan onderconstructie";
    }
    else {
      console.log("Ga een stap terug en kies voor geen helling");
    }

    this.setState({
      recommendation: this.prediction,
      prijsMin: prijsMin,
      prijsMax: prijsMax,
      done: true
    }, () => {
      return this.state;
    });
  }

  render() {
    if (this.state.done == true) {
      return (
        <div>
          <Redirect
            to={{
              pathname: "/2",
              state: { recommendation: this.state.recommendation, prijsMin: this.state.prijsMin, prijsMax: this.state.prijsMax },
            }}
          />
        </div>
      );
    }
    else {
      return (
        <div className='text-center pb-48'>
          <h2 className='pt-3'>Gegevens Hellend dak:</h2>
          <h4 className='pt-3'>Vul hier de gegevens in voor uw hellend dak</h4>
          <form onSubmit={this.handleSubmit} className='flex flex-col'>
            <label htmlFor="graden" className='pt-5'>Dak helling in graden°:</label>
            <input id="graden" type="number" min="1" max="45" className='form-input p-1 m-auto sm:w-1/4 h-auto rounded-md' required/>
            <br/>
            <label htmlFor="oppervlak" className='pt-5'>Oppervlakte dak in m²</label>
            <input id="oppervlak" type="number" className='form-input p-1 m-auto sm:w-1/4 h-auto rounded-md' required/>
            <br/>
            <button id="submit" className='py-2 px-5 mx-auto my-5 text-green-600 border border-green-600 rounded-md hover:text-gray-100 hover:bg-green-600'>Submit</button>
          </form>
        </div>
      );
    }
  }
}

export default Helling;
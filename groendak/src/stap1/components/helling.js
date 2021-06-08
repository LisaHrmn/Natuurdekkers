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
      console.log("Licht Hellend Groendak");
      this.prediction = "Licht hellend";
    }
    else if(graden >= 16 && graden <= 35)
    {
      console.log("Schuin Hellend Groendak ");
      this.prediction = "Schuin Hellend";
    }
    else{
      this.prediction = "Helaas is de door u gekozen helling niet mogelijk."
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
    if (this.state.done === true) {
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
        <div>
          {/* terug knop */}
          <a class=" text-2xl text-left underline pl-2" href="/0">terug</a>
          <div className="w-full flex justify-center">
            <div className='w-full flex flex-col p-5 pt-1'>
              <h2 className='pt-3 pb-2 m-auto'>Gegevens Hellend dak:</h2>
              <form onSubmit={this.handleSubmit} className='mt-0 mb-0'>
                <div className="flex justify-around">
                  <div className="flex flex-col border p-3 m-2 sm:w-1/3 w-2/3">
                  <h4 className='text-green-600'>Vul hier de gegevens in voor uw hellend dak</h4>
                  <label htmlFor="graden" className='pt-5'>Dak helling in graden°:</label>
                  <input id="graden" type="number" min="1" max="35" className='form-input p-1 mt-1 ml-0 w-1/3 sm:w-1/4 h-auto rounded-md' required/>

                  <label htmlFor="oppervlak" className='pt-5'>Oppervlakte dak in m²</label>
                  <input id="oppervlak" type="number" className='form-input p-1 mt-1 ml-0 w-1/3 sm:w-1/4 h-auto rounded-md' required/>
                  
                  <button id="submit" className='py-2 px-5 mx-auto my-5 text-green-600 border border-green-600 rounded-md hover:text-gray-100 hover:bg-green-600'>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Helling;
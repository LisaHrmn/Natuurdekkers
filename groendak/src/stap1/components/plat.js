import React, { Component } from 'react';
import { Redirect } from 'react-router';

import info from "./images/info.png";
import './css/plat.css';

class Plat extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    const generator = require('knear');

    const k = 3;
    const knn = new generator.kNear(k);
  
    let gewichtEco;
    let gewichtLicht;
    let gewichtNatuur;
    let gewichtSolar;

    let i;
    for (i = 0; i < 100; i++) {
      gewichtEco = Math.floor(Math.random() * (7.5 - 6.5 + 1)) + 6.5;
      gewichtLicht = Math.floor(Math.random() * (6.5 - 4 + 1)) + 4;
      gewichtNatuur = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
      gewichtSolar = Math.floor(Math.random() * (12.5 - 10 + 1)) + 10;

      knn.learn([gewichtEco, 2, 2, 1, 1], "Economisch");
      knn.learn([gewichtLicht, 1, 1, 2, 2], "Lichtgewicht");
      knn.learn([gewichtNatuur, 3, 5, 2, 3], "Natuur");
      //knn.learn([gewichtSolar, 2, 2, 2], "Solar");
    }

    this.state = {knn: knn, recommendation: "", prijsMin: "", prijsMax: "", waarom: "", done: false};
  }

  handleSubmit(event) {
    event.preventDefault();
    let gewicht = document.getElementById("gewicht").value;
    let water = document.getElementById("water").value;
    let bio = document.getElementById("bio").value;
    let onderhoud = document.getElementById("onderhoud").value;
    let oppervlak = document.getElementById("oppervlak").value;
    let kosten = document.getElementById("kosten").value;

    let zon = document.getElementById("zon").value;

    let prijsMin;
    let prijsMax;

    let waarom;

    gewicht = parseInt(gewicht);
    gewicht = gewicht / 10;
    water = parseInt(water);
    bio = parseInt(bio);
    onderhoud = parseInt(onderhoud);

    let prediction = "";

    if(zon == "ja" && gewicht >= 10)
    {
      prediction = "Solar";
    }
    else
    {
      prediction = this.state.knn.classify([gewicht, water, bio, onderhoud, kosten])
    }

    console.log(prediction)

    if(prediction === "Lichtgewicht")
    {
      prijsMin = oppervlak * 35;
      prijsMax = oppervlak * 60;

      waarom = "Op basis van de draagkracht heeft de AI gekozen dat een lichtgewicht dak het beste bij je past.";
    }
    else if(prediction === "Economisch")
    {
      prijsMin = oppervlak * 25;
      prijsMax = oppervlak * 55;

      waarom = "Op basis van de prijs heeft de AI gekozen dat een economisch dak goed bij je past.";
    }
    else if(prediction === "Natuur")
    {
      prijsMin = oppervlak * 45;
      prijsMax = oppervlak * 80;

      waarom = "Op basis van het biodiversiteit heeft de AI gekozen dat een natuur dak goed bij je past.";
    }
    else if(prediction === "Solar")
    {
      prijsMin = oppervlak * 25;
      prijsMax = oppervlak * 25;

      waarom = "Op basis van de draagkracht en de interesse in zonnepalenel heeft de AI gekozen dat een solar dak goed bij je past.";
    }

    this.setState({
      recommendation: prediction,
      prijsMin: prijsMin,
      prijsMax: prijsMax,
      waarom: waarom,
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
              state: { recommendation: this.state.recommendation, prijsMin: this.state.prijsMin, prijsMax: this.state.prijsMax, waarom: this.state.waarom },
            }}
          />
        </div>
      );
    }
    else {
      return (
        <div className="w-full flex justify-center">
          <div className='w-full flex flex-col p-5 pt-1'>
            {/* terug knop */}
        <a class=" text-2xl text-left underline pl-2" href="/0">terug</a>
            <h2 className='pt-3 pb-2'>Gegevens plat dak:</h2>
            <form onSubmit={this.handleSubmit} className='m-auto mt-0 mb-0'>
              <div className="flex justify-around">
                <div className="flex flex-col border p-3 m-2 w-1/3">
                  <h4 className='text-green-600'>Vul hier de gewenste specificaties in van het groene dak</h4>
                  <label htmlFor="water" className='pt-5'>Hoe hoog mag de waterbuffering zijn?
                  <div class="tooltip1"><img src={info} alt="placeholder" width="20" height="20"></img>
                    <span class="tooltiptext1">
                      Waterbuffer: Dit is de hoeveelheid water in liter per vierkante meter het dak kan opslaan. Een goede waterbuffer voorkomt wateroverlast en overbelasting van het riool.
                    </span>
                  </div></label>
                  <select name="water" id="water" className='form-input p-1 mt-1 ml-0 w-1/4 h-auto rounded-md' required>
                    <option disabled selected value="">Kies...</option>
                    <option value="1">Laag</option>
                    <option value="2">Middel</option>
                    <option value="3">Hoog</option>
                  </select>

                  <label htmlFor="bio" className='pt-5'>Hoeveel biodiversiteit wil dat je het groene dak heeft op een schaal van 1 tot 5? 
                  <div class="tooltip1"><img src={info} alt="placeholder" width="20" height="20"></img>
                    <span class="tooltiptext1">
                      biodiversiteit: Dit is de graad aan verschilende levensvormen op het dak
                      <br/>
                      1 is weinig en 5 is veel.
                    </span>
                  </div></label>
                  <input id="bio" type='number' min="1" max="5" className='form-input p-1 mt-1 ml-0 w-1/4 h-auto rounded-md' required/>

                  <label htmlFor="onderhoud" className='pt-5'>Hoe onderhoudsintensief mag het groene dak zijn op een schaal van 1 tot 5?
                  <div class="tooltip2"><img src={info} alt="placeholder" width="20" height="20"></img>
                    <span class="tooltiptext2">
                      1 is weinig en 5 is veel.
                    </span>
                  </div></label>
                  <input id="onderhoud" type='number' min="1" max="5" className='form-input p-1 mt-1 ml-0 w-1/4 h-auto rounded-md' required/>

                  <label htmlFor="kosten" className='pt-5'>Hoe hoog mogen de kosten zijn?</label>
                  <select name="kosten" id="kosten" className='form-input p-1 mt-1 ml-0 w-1/4 h-auto rounded-md' required>
                    <option disabled selected value="">Kies...</option>
                    <option value="1">Laag</option>
                    <option value="2">Middel</option>
                    <option value="3">Hoog</option>
                  </select>
                  <label htmlFor="zon" className='pt-5'>Is er interesse in zonnepanelen op het dak?</label>
                  <select name="zon" id="zon" className='form-input p-1 mt-1 ml-0 w-1/4 h-auto rounded-md' required>
                    <option disabled selected value="">Kies...</option>
                    <option value="ja">Ja</option>
                    <option value="nee">Nee</option>
                  </select>
                </div>
                <br></br>
                <div className="flex flex-col border p-3 m-2 w-1/3">
                <h4 className='text-green-600'>Vul hier de gegevens in van uw platte dak</h4>
                <label htmlFor="gewicht" className='pt-5'>Draagkracht per kg/m²</label>
                <input id="gewicht" type='number' className='form-input p-1 mt-1 ml-0 w-1/4 h-auto rounded-md' required/>

                <label htmlFor="oppervlak" className='pt-5'>Oppervlakte dak in m²</label>
                <input id="oppervlak" type='number' className='form-input p-1 mt-1 ml-0 w-1/4 h-auto rounded-md' required/>
                </div>
              </div>
              <div className="flex justify-center">
                <button id="submit" className='py-2 px-5 mx-auto my-5 text-green-600 border border-green-600 rounded-md hover:text-gray-100 hover:bg-green-600'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
};

export default Plat;
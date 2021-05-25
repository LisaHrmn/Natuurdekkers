import '../stap1.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Plat extends Component {
  constructor() {
    super()
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

      knn.learn([gewichtEco, 2, 2, 1], "eco");
      knn.learn([gewichtLicht, 1, 1, 2], "licht");
      knn.learn([gewichtNatuur, 3, 5, 2], "natuur");
      knn.learn([gewichtSolar, 2, 2, 2], "solar");
    }

    this.state = {knn: knn, recommendation: "", prijsMin: "", prijsMax: "", done: false};
  }

  handleSubmit(event) {
    event.preventDefault();
    let gewicht = document.getElementById("gewicht").value;
    let water = document.getElementById("water").value;
    let bio = document.getElementById("bio").value;
    let onderhoud = document.getElementById("onderhoud").value;
    let oppervlak = document.getElementById("oppervlak").value;

    let prijsMin;
    let prijsMax;

    gewicht = parseInt(gewicht);
    gewicht = gewicht / 10;
    water = parseInt(water);
    bio = parseInt(bio);
    onderhoud = parseInt(onderhoud);

    let prediction = this.state.knn.classify([gewicht, water, bio, onderhoud])
    console.log(prediction)

    if(prediction === "licht")
    {
      prijsMin = oppervlak * 35;
      prijsMax = oppervlak * 60;
    }
    else if(prediction === "eco")
    {
      prijsMin = oppervlak * 25;
      prijsMax = oppervlak * 55;
    }
    else if(prediction === "natuur")
    {
      prijsMin = oppervlak * 45;
      prijsMax = oppervlak * 80;
    }
    else if(prediction === "solar")
    {
      prijsMin = oppervlak * 25;
      prijsMax = oppervlak * 25;
    }

    this.setState({
      recommendation: prediction,
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
        <div>
          <h2>Plat:</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="gewicht">Gewicht in KG</label>
            <input id="gewicht" type="number"/>
            <br/>
            <label htmlFor="oppervlak">Oppervlakte dak in m²</label>
            <input id="oppervlak" type="number"/>
            <br/>
            <label htmlFor="water">1-3</label>
            <input id="water" type="number"/>
            <br/>
            <label htmlFor="bio">biodiversiteit 1-5</label>
            <input id="bio" type="number" min="1" max="5"/>
            <br/>
            <label htmlFor="onderhoud">onderhoud 1-5</label>
            <input id="onderhoud" type="number" min="1" max="5"/>
            <br/>
            <button id="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}

export default Plat;
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

    let i;
    for (i = 0; i < 100; i++) {
      gewichtEco = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
      gewichtLicht = Math.floor(Math.random() * (6.5 - 4.5 + 1)) + 4.5;
      gewichtNatuur = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
  
      knn.learn([gewichtEco, 2, 2, 1], "eco");
      knn.learn([gewichtLicht, 1, 1, 2], "licht");
      knn.learn([gewichtNatuur, 3, 5, 2], "natuur");
    }

    this.state = {knn: knn, recommendation: "", done: false};
  }

  handleSubmit(event) {
    event.preventDefault();
    let gewicht = document.getElementById("gewicht").value;
    let water = document.getElementById("water").value;
    let bio = document.getElementById("bio").value;
    let onderhoud = document.getElementById("onderhoud").value;

    gewicht = parseInt(gewicht);
    gewicht = gewicht / 10;
    water = parseInt(water);
    bio = parseInt(bio);
    onderhoud = parseInt(onderhoud);

    let prediction = this.state.knn.classify([gewicht, water, bio, onderhoud])
    console.log(prediction)

    this.setState({
      recommendation: prediction,
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
              state: { recommendation: this.state.recommendation },
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
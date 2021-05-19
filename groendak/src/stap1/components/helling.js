import '../stap1.css';
import React, { Component } from 'react';

class Helling extends Component {
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

    this.state = {knn: knn};
  }

  handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    let graden = document.getElementById("graden").value;

    if(graden >= 1 && graden <= 15)
    {
      console.log("Dakbegroeiing zonder schuifbeveiligingsysteem");
    }
    else if(graden >= 16 && graden <= 35)
    {
      console.log("Dakbegroeiing met schuifbeveiligingsysteem afsteuning in de goot/dakrand");
    }
    else if(graden >= 36 && graden <= 40)
    {
      console.log("Dakbegroeiing met schuifbeveiligingsysteem afsteuning tegen dakrand")
    }
    else if(graden >= 41 && graden <= 45)
    {
      console.log("Dakbegroeiing met schuifbeveiligingsysteem bevestigd aan onderconstructie")
    }
    else {
      console.log("Ga een stap terug en kies voor geen helling");
    }
  }

  render() {
    return (
      <div>
        <h2>Helling:</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="graden">Dak helling in graden°:</label>
          <input id="graden" type="number" min="1" max="45"/>
          <br/>
          <button id="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Helling;
import '../stap1.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Helling extends Component {
  prediction;

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {recommendation: "", done: false};
  }

  handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    let graden = document.getElementById("graden").value;

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
}

export default Helling;
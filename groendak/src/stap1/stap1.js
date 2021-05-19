import './stap1.css';
import React, { Component } from 'react';
import Plat from './components/plat';
import Helling from './components/helling';

class Stap1 extends Component {
  constructor() {
    super()

  }

  render() {
    if (JSON.stringify(this.props.match.params.helling) == "\"vlak\"") {
      return (
        <div>
          <Plat></Plat>
        </div>
      );
    }
    if (JSON.stringify(this.props.match.params.helling) == "\"helling\"") {
      return (
        <div>
          <Helling></Helling>
        </div>
      );
    }
    else {
      return (
        <div>
          <h1>404</h1>
        </div>
      );
    }
  }
}

export default Stap1;
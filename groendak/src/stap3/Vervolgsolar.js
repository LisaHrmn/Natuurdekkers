import React, { Component } from 'react';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'
import {Link} from "react-router-dom";

class Vervolgsolar extends Component {
    constructor() {
        super()

        this.state = {recommendation: "", done: false};
    }

    render() {
        return (
            <div className='p-2 max-w-prose m-auto pb-5'>
                <h1>Solar groendak</h1>
                <p>
                    Het solar groendak is de combinatie van zonnepanelen en groen op het dak. Voor het solar groendak moeten er
                    eerst zonnepanelen aanwezig zijn voordat het groen kan worden aangelegd. Voor meer informatie en mogelijkheden
                    voor zonnepanelen kijk <a className="text-blue-800" href="https://www.zonnepanelen-info.nl/">hier</a>. Er zijn ook opties om zonnepanelen en het groendak tegelijkertijd te laten aanleggen
                    bijvoorbeeld bij <a className="text-blue-800" href="https://groendakcoach.nl/groendak-informatie/groendak-met-zonnepanelen/">groendakcoach</a> en <a className="text-blue-800" href="https://www.solargroendaken.nl/">solargroendaken</a>.
                </p>
                <br/>
                <p>
                    Als u zonnepanelen heeft kunt u de opties hieronder bekijken voor hoe u hierbij groen kan aanleggen.
                    We hebben een aantal betrouwbare leveranciers met groen opties die passen bij het solar groendak. De
                    opties die we meegeven zijn goed geschikt voor het zelf aanleggen van het groen. Voordat u aan de slag
                    gaat bekijk onze <Link to={`/Handleiding`} target="_blank" className='text-blue-800'>handleiding</Link> met tips en uitleg voor als u zelf aan de slag wil gaan met het groendak.
                </p>
                <br/>
                <p>
                    Sedummaten zijn de beste optie bij solargroendaken omdat deze gemakkelijk rondom de zonnepanelen
                    zijn neer te leggen en deze gelijk groen zijn waardoor ze het snelst effectief werken.
                </p>
            </div>
        );
    }
}

export default Vervolgsolar;
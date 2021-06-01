import React, { Component } from 'react';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'
import {Link} from "react-router-dom";

class Vervolglicht extends Component {
    constructor() {
        super()

        this.state = {recommendation: "", done: false};
    }

    render() {
        return (
            <div className='p-2 max-w-prose m-auto pb-5'>
                <h1>Lichtgewicht groendak</h1>
                <p>
                    Het lichtgewicht groendak is een goede optie als uw dak niet een groot gewicht
                    aankan of als u onzeker bent over de draagkracht van uw dak. De vuistregel bij een
                    lichtgewicht groendak is dat het voor elk dak dat door volwassene beloopbaar is dit dak kan dragen.
                </p>
                <br/>
                <p>
                    We hebben een aantal betrouwbare leveranciers met verschillende groendaken opties die
                    passen bij het lichtgewicht groendak. De opties die we meegeven zijn goed geschikt voor het
                    zelf aanleggen van het groen, maar u kunt ook een aannemer inschakelen voor het aanleggen.
                    Voordat u aan de slag gaat bekijk onze <Link to={`/Handleiding`} target="_blank" className='text-blue-800'>handleiding</Link> met tips en uitleg voor als u zelf aan de slag
                    wil gaan met het groendak.
                </p>
                <br/>
                <p>
                    Belangrijk om te weten als u door onze lijst aan opties kijkt is: sedumstekken zijn goedkoper
                    maar moeilijker aan te leggen en ze hebben meer tijd nodig voordat ze mooi zijn, sedummatten,
                    cassettes en tapijten zijn iets duurder maar makkelijker aan te leggen en gelijk mooi. Klik op
                    de linkjes voor meer informatie over de leverancier en de opties.
                </p>
            </div>
        );
    }
}

export default Vervolglicht;
import React, { Component } from 'react';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'
import {Link} from "react-router-dom";

class Vervolgeconomisch extends Component {
    constructor() {
        super()

        this.state = {recommendation: "", done: false};
    }

    render() {
        return (
            <div className='p-2 max-w-prose m-auto pb-5'>
                <h1>Economisch groendak</h1>
                <p>
                    Het economisch groendak wordt aangeraden als de voordeligste optie voor een groendak.
                    Als u toch iets meer biodivers wil in ruil voor een iets hogere prijs kunt u ook een kijkje
                    nemen naar de vervolgstappen voor het <Link to={`/Vervolgnatuur`} target="_blank" className='text-blue-800'>natuur groendak</Link>.
                </p>
                <br/>
                <p>
                    We hebben een aantal betrouwbare leveranciers met verschillende groendaken opties die passen bij
                    het economisch groendak. De opties die we meegeven zijn goed geschikt voor het zelf aanleggen van
                    het groen, maar u kunt ook een aannemer inschakelen voor het aanleggen. Voordat u aan de slag gaat
                    bekijk onze <Link to={`/Handleiding`} target="_blank" className='text-blue-800'>handleiding</Link> met tips en uitleg voor als u zelf aan de slag wil gaan met het groendak.
                </p>
                <br/>
                <p>
                    Belangrijk om te weten als u door onze lijst aan opties kijkt is: sedumstekken en planten
                    zijn goedkoper maar moeilijker aan te leggen en ze hebben meer tijd nodig voordat ze mooi zijn,
                    sedummatten en tapijten zijn iets duurder maar makkelijker aan te leggen en gelijk mooi. Klik op de
                    linkjes voor meer informatie over de leverancier en de opties.

                </p>
            </div>
        );
    }
}

export default Vervolgeconomisch;
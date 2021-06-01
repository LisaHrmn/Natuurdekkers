import React, { Component } from 'react';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'
import {Link} from "react-router-dom";

class Vervolglichthellend extends Component {
    constructor() {
        super()

        this.state = {recommendation: "", done: false};
    }

    render() {
        return (
            <div className='p-2 max-w-prose m-auto pb-5'>
                <h1>Licht hellend groendak</h1>
                <p>
                    Het licht hellend groendak is geschikt voor daken met een helling tussen de 5° en 15°.
                    Hiervoor zijn vaak niet veel extra spullen nodig om het groen goed op het dak te bevestigen.

                </p>
                <br/>
                <p>
                    We hebben een aantal betrouwbare leveranciers met groendaken opties die passen bij het
                    licht hellend groendak. De opties die we meegeven zijn goed geschikt voor het zelf aanleggen
                    van het groen, maar u kunt ook een aannemer inschakelen voor het aanleggen. Voordat u aan de slag
                    gaat bekijk onze <Link to={`/Handleiding`} target="_blank" className='text-blue-800'>handleiding</Link> met tips en uitleg voor als u zelf aan de slag wil gaan met het groendak.

                </p>
                <br/>
                <p>
                    Klik op de linkjes voor meer informatie over de leverancier en de opties.
                </p>
            </div>
        );
    }
}

export default Vervolglichthellend;
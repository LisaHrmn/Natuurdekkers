import React, { Component } from 'react';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'
import {Link} from "react-router-dom";

class Vervolgschuinhellend extends Component {
    constructor() {
        super()

        this.state = {recommendation: "", done: false};
    }

    render() {
        return (
            <div>
                {/* terug knop */}
                <a class=" text-2xl text-left underline pl-2" href="/0">opnieuw invullen</a>
            <div className='p-2 max-w-prose m-auto pb-5'>
                <h1>Schuin hellend groendak</h1>
                <p>
                    Het licht hellend groendak is geschikt voor daken met een helling tussen de 15° en 35°.
                    Hierbij is een anti-afschuifsysteem noodzakelijk.
                </p>
                <br/>
                <p>
                    We hebben een aantal betrouwbare leveranciers met groendaken opties die passen bij
                    het schuin hellend groendak. De opties die we meegeven zijn goed geschikt voor het
                    zelf aanleggen van het groen, maar u kunt ook een aannemer inschakelen voor het aanleggen.
                    Voordat u aan de slag gaat bekijk onze <Link to={`/Handleiding`} target="_blank" className='text-blue-800'>handleiding</Link> met tips en uitleg voor als u aan de slag
                    wil gaan met het groendak.
                </p>
                <br/>
                <p>
                    Klik op de linkjes voor meer informatie over de leverancier en de opties.
                </p>
                <br/>
                <a className="text-lg text-blue-800" href="https://www.groendakwebshop.nl/">groendakwebshop.nl</a>
                <br/>
                <a className="text-base text-blue-800" href="https://www.groendakwebshop.nl/Kant-en-klaar-pakketten/sedumpakket-voor-schuindak.html">Schuin dak sedummatten</a>
                <br/>
                <br/>
                <a className="text-lg text-blue-800" href="https://www.groenedaken.net/">groenedaken.nl</a>
                <br/>
                <a className="text-base text-blue-800" href="https://www.groenedaken.net/a-38055320/groendak-webshop/schuin-hellend-pakket-prijs-v-a/#description">Schuin dak sedummatten</a>
                <br/>
                <br/>
                <a className="text-lg text-blue-800" href="https://groendaktotaal.nl/">groendaktotaal.nl</a>
                <br/>
                <a className="text-base text-blue-800" href="https://groendaktotaal.nl/shop.html/schuindak-20-30-graden.html">Schuin dak sedummatten</a>
                <br/>
                <br/>
            </div>
            </div>
        );
    }
}

export default Vervolgschuinhellend;
import React, { Component } from 'react';

//Roof type images
import eco from '../img/eco.png'
import hellend from '../img/hellend.jpg'
import licht from '../img/licht.jpg'
import natuur from '../img/natuur.jpg'
import solar from '../img/solar.jpg'
import {Link} from "react-router-dom";

class Vervolgnatuur extends Component {
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
                <h1>Natuur groendak</h1>
                <p>
                    Het natuur groendak is de meest biodiverse optie voor groen op uw dak.
                </p>
                <br/>
                <p>
                    We hebben een aantal betrouwbare leveranciers met verschillende groendaken
                    opties die passen bij het natuur groendak. De opties die we meegeven zijn goed
                    geschikt voor het zelf aanleggen van het groen, maar u kunt ook een aannemer
                    inschakelen voor het aanleggen. Voordat u aan de slag gaat bekijk onze <Link to={`/Handleiding`} target="_blank" className='text-blue-800'>handleiding</Link> met
                    tips en uitleg voor als u zelf aan de slag wil gaan met het groendak.
                </p>
                <br/>
                <p>
                    Klik op de linkjes voor meer informatie over de leverancier en de opties.
                </p>
                <br/>
                <a className="text-lg text-blue-800" href="https://www.groendakwebshop.nl/">groendakwebshop.nl</a>
                <br/>
                <a className="text-base text-blue-800" href="https://www.groendakwebshop.nl/Kant-en-klaar-pakketten/Natuurdak-zaai-pakket.html">Zaaipakket en Sedumstekken</a>
                <br/>
                <a className="text-base text-blue-800" href="https://www.groendakwebshop.nl/Kant-en-klaar-pakketten/kruidenpakket-plat-dak.html">Sedum kruiden matten</a>
                <br/>
                <a className="text-base text-blue-800" href="https://www.groendakwebshop.nl/Kant-en-klaar-pakketten/Turfdak-pakket.html">Turfstekken</a>
                <br/>
                <br/>
                <a className="text-lg text-blue-800" href="https://www.groenedaken.net/">groenedaken.net</a>
                <br/>
                <a className="text-base text-blue-800" href="https://www.groenedaken.net/a-29015141-4641247/groendak-webshop/wildflower-pakket-prijs-v-a/#description">Grassen-Kruiden matten</a>
                <br/>
                <br/>
            </div>
            </div>
        );
    }
}

export default Vervolgnatuur;
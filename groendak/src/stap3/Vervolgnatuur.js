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
                <h1 className='pt-3 text-green-600 font-semibold'>Natuur groendak</h1>
                <p className='py-2 pt-5'>
                    Het natuur groendak is de meest biodiverse optie voor groen op uw dak.
                </p>
                <p className='py-2'>
                    We hebben een aantal betrouwbare leveranciers met verschillende groendaken
                    opties die passen bij het natuur groendak. De opties die we meegeven zijn goed
                    geschikt voor het zelf aanleggen van het groen, maar u kunt ook een aannemer
                    inschakelen voor het aanleggen. Voordat u aan de slag gaat bekijk onze <Link to={`/Handleiding`} target="_blank" rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold'>handleiding</Link> met
                    tips en uitleg voor als u zelf aan de slag wil gaan met het groendak.
                </p>
                <p className='py-2 pb-5'>
                    Klik op de linkjes voor meer informatie over de leverancier en de opties.
                </p>

                <a className='text-lg text-green-600 hover:text-green-700 font-semibold underline' target='_blank' rel="noreferrer" href="https://www.groendakwebshop.nl/">Groendakwebshop.nl</a>
                <ul className='list-disc py-2 pb-5'>
                    <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://www.groendakwebshop.nl/Kant-en-klaar-pakketten/Natuurdak-zaai-pakket.html">Zaaipakket en sedumstekken</a></li>
                    <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://www.groendakwebshop.nl/Kant-en-klaar-pakketten/kruidenpakket-plat-dak.html">Sedum kruiden matten</a></li>
                    <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://www.groendakwebshop.nl/Kant-en-klaar-pakketten/Turfdak-pakket.html">Turfstekken</a></li>
                </ul>

                <a className='text-lg text-green-600 hover:text-green-700 font-semibold underline' target='_blank' rel="noreferrer" href="https://www.groenedaken.net/">Groenedaken.net</a>
                <ul className='list-disc py-2 pb-5'>
                    <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://www.groenedaken.net/a-29015141-4641247/groendak-webshop/wildflower-pakket-prijs-v-a/#description">Grassen-kruiden matten</a></li>
                </ul>
            </div>
            </div>
        );
    }
}

export default Vervolgnatuur;
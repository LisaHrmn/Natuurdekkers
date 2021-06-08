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
            <div>
                {/* terug knop */}
                <a class=" text-2xl text-left underline pl-2" href="/0">Opnieuw invullen</a>
                <div className='p-2 max-w-prose m-auto pb-5'>
                    <h1 className='pt-3 text-green-600 font-semibold'>Economisch groendak</h1>
                    <p className='py-2 pt-5'>
                        Het economisch groendak wordt aangeraden als de voordeligste optie voor een groendak.
                        Als u toch iets meer biodivers wil in ruil voor een iets hogere prijs kunt u ook een kijkje
                        nemen naar de vervolgstappen voor het <Link to={`/Vervolgnatuur`} target="_blank" rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold'>natuur groendak</Link>.
                    </p>
                    <p className='py-2'>
                        We hebben een aantal betrouwbare leveranciers met verschillende groendaken opties die passen bij
                        het economisch groendak. De opties die we meegeven zijn goed geschikt voor het zelf aanleggen van
                        het groen, maar u kunt ook een aannemer inschakelen voor het aanleggen. Voordat u aan de slag gaat
                        bekijk onze <Link to={`/Handleiding`} target="_blank" rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold'>handleiding</Link> met tips en uitleg voor als u zelf aan de slag wil gaan met het groendak.
                    </p>
                    <p className='py-2 pb-5'>
                        Belangrijk om te weten als u door onze lijst aan opties kijkt is: sedumstekken en planten
                        zijn goedkoper maar moeilijker aan te leggen en ze hebben meer tijd nodig voordat ze mooi zijn,
                        sedummatten en tapijten zijn iets duurder maar makkelijker aan te leggen en gelijk mooi. Klik op de
                        linkjes voor meer informatie over de leverancier en de opties.

                    </p>

                    <a className='text-lg text-green-600 hover:text-green-700 font-semibold underline' target='_blank' rel="noreferrer" href="https://www.groendakwebshop.nl/">Groendakwebshop.nl</a>
                    <ul className='list-disc py-2 pb-5'>
                        <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://www.groendakwebshop.nl/">Sedumstek pakket</a></li>
                        <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://www.groendakwebshop.nl/">Sedumplant pakket</a></li>
                    </ul>

                    <a className='text-lg text-green-600 hover:text-green-700 font-semibold underline' target='_blank' rel="noreferrer" href="https://groendaktotaal.nl/">Groendaktotaal.nl</a>
                    <ul className='list-disc py-2 pb-5'>
                        <li><a className='ml-4 text-base text-green-600 hover:text-green-700 font-semibold' target='_blank' rel="noreferrer" href="https://groendaktotaal.nl/shop.html/plat-dak.html">Sedummatten</a></li>
                    </ul>

                    <a className='text-lg text-green-600 hover:text-green-700 font-semibold underline' target='_blank' rel="noreferrer" href="https://www.groenedaken.net/">Groenedaken.net</a>
                    <ul className='list-disc py-2 pb-5'>
                        <li><a className='ml-4 text-base text-green-600 hover:text-green-700 font-semibold' target='_blank' rel="noreferrer" href="https://www.groenedaken.net/a-28897289-4641247/groendak-webshop/sedumstek-pakket-prijs-v-a/#description">Sedumstek pakket</a></li>
                        <li><a className='ml-4 text-base text-green-600 hover:text-green-700 font-semibold' target='_blank' rel="noreferrer" href="https://www.groenedaken.net/a-28897327-4641247/groendak-webshop/sedumtapijt-pakket-prijs-v-a/#description">Sedumtapijt pakket</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Vervolgeconomisch;
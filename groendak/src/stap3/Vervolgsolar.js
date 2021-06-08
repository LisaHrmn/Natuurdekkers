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
            <div>
                {/* terug knop */}
                <a class=" text-xl text-left underline pl-6" href="/0">opnieuw invullen</a>
                <div className='p-2 max-w-prose m-auto pb-5'>
                    <h1 className='pt-3 text-green-600 font-semibold'>Solar groendak</h1>
                    <p className='py-2 pt-5'>
                        Het solar groendak is de combinatie van zonnepanelen en groen op het dak. Voor het solar groendak moeten er
                        eerst zonnepanelen aanwezig zijn voordat het groen kan worden aangelegd. Voor meer informatie en mogelijkheden
                        voor zonnepanelen kijk <a target="_blank" rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold' href="https://www.zonnepanelen-info.nl/">hier</a>. Er zijn ook opties om zonnepanelen en het groendak tegelijkertijd te laten aanleggen
                        bijvoorbeeld bij <a target="_blank" rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold' href="https://groendakcoach.nl/groendak-informatie/groendak-met-zonnepanelen/">groendakcoach</a> en <a target="_blank" rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold' href="https://www.solargroendaken.nl/">solargroendaken</a>.
                    </p>
                    <p className='py-2'>
                        Als u zonnepanelen heeft kunt u de opties hieronder bekijken voor hoe u hierbij groen kan aanleggen.
                        We hebben een aantal betrouwbare leveranciers met groen opties die passen bij het solar groendak. De
                        opties die we meegeven zijn goed geschikt voor het zelf aanleggen van het groen. Voordat u aan de slag
                        gaat bekijk onze <Link to={`/Handleiding`} target="_blank" rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold'>handleiding</Link> met tips en uitleg voor als u zelf aan de slag wil gaan met het groendak.
                    </p>
                    <p className='py-2 pb-5'>
                        Sedummaten zijn de beste optie bij solargroendaken omdat deze gemakkelijk rondom de zonnepanelen
                        zijn neer te leggen en deze gelijk groen zijn waardoor ze het snelst effectief werken.
                    </p>

                    <a className='text-lg text-green-600 hover:text-green-700 font-semibold underline' target='_blank' rel="noreferrer" href="https://groendaktotaal.nl/">Groendaktotaal.nl</a>
                    <ul className='list-disc py-2 pb-5'>
                        <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://groendaktotaal.nl/shop.html/plat-dak.html">Sedummatten</a></li>
                    </ul>
                    
                    <a className='text-lg text-green-600 hover:text-green-700 font-semibold underline' target='_blank' rel="noreferrer" href="https://www.groenedaken.net/">Groenedaken.net</a>
                    <ul className='list-disc py-2 pb-5'>
                        <li><a className='ml-4 text-base text-green-600 hover:text-green-700 hover:underline font-semibold' target='_blank' rel="noreferrer" href="https://www.groenedaken.net/a-28897327-4641247/groendak-webshop/sedumtapijt-pakket-prijs-v-a/#description">Sedumtapijt pakket</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Vervolgsolar;
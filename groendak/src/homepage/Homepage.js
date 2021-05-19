import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//images for carousel
import eco from '../img/eco.png';
import hellend from '../img/hellend.jpg';
import licht from '../img/licht.jpg';
import natuur from '../img/natuur.jpg';
import solar from '../img/solar.jpg';

function Homepage() {
  return (
    <div>

      <section className='p-3 text-center'>
        <h3 className='pt-3 text-green-600 font-semibold'>Groene Daken</h3>
        <p className='p-2 max-w-prose m-auto'>
          Groene daken komen in alle vormen en maten. Zo zijn er verschillende mogelijkheden voor soorten beplanting en platte en hellende daken. 
          Een groendak heeft vele voordelen voor uw huis, zo zorgt een groendak voor betere waterafvoer en warmte- en geluidsisolatie en verhoogt het de levensduur van uw dak. 
          Daarnaast draagt een groendak bij aan een gezondere leefomgeving, beter milieu en meer biodiversiteit.
        </p>
        <p className='p-2 max-w-prose m-auto'>
          Mogelijk kunt u subsidie krijgen voor het aanleggen van een groendak, <a target='_blank' className='text-green-600 font-semibold' href="https://groenesubsidiewijzer.verbeterjehuis.nl/groenesubsidiewijzer/">bekijk hier</a> de mogelijkheden bij uw gemeente.
        </p>
        <p className='p-2 max-w-prose m-auto'>
          Afhankelijk van de specificaties, spreken we over verschillende groene daken. Wij willen u helpen met het uitvinden welk groendak het beste bij uw wensen en situatie past. 
          Hieronder kunt u een kijkje nemen naar de verschillende groene daken en een stappenplan doorlopen om erachter te komen welk groen dak het best bij u zou passen 
          en hoe u hiermee aan de slag zou kunnen. 
        </p>
      </section>

      <section className='p-3 font-bold text-center bg-gray-100'>
        <h3 className='pb-3 text-green-600 font-semibold'>Types</h3>
        <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls infinite>
          <div>
            <img src={eco} className='m-auto sm:w-1/3 h-auto object-contain' alt='Economisch groen dak'/>
            <p className='text-green-700 font-semibold'>Economisch Groendak</p>
          </div>
          <div>
            <img src={hellend} className='m-auto sm:w-1/3 h-auto object-contain' alt='Hellend groen dak'/>
            <p className='text-green-700 font-semibold'>Hellend Groendak</p>
          </div>
          <div>
            <img src={licht} className='m-auto sm:w-1/3 h-auto object-contain' alt='Licht gewicht groen dak'/>
            <p className='text-green-700 font-semibold'>Lichtgewicht Groendak</p>
          </div>
          <div>
            <img src={natuur} className='m-auto sm:w-1/3 h-auto object-contain' alt='Natuur groen dak'/>
            <p className='text-green-700 font-semibold'>Natuur Groendak</p>
          </div>
          <div>
            <img src={solar} className='m-auto sm:w-1/3 h-auto object-contain' alt='Solar groen dak'/>
            <p className='text-green-700 font-semibold'>Solar Groendak</p>
          </div>
        </AliceCarousel>
      </section>

      <section className='p-3 text-center'>
        <h3 className='text-green-600 font-semibold'>Stappenplan</h3>
        <p className='p-2 pb-5 max-w-prose m-auto'>
          Binnen drie stappen kunt u gratis uitvinden wat voor groendak het best bij uw wensen en situatie zou passen en hoe u hiermee aan de slag zou kunnen. 
          Bekijk de stappen hieronder of klik op start om te beginnen. 
        </p>
        <Link to='/1' className='py-2 px-8 px-none bg-green-600 hover:bg-green-800 text-gray-50 border-solid border-1 border-green-800 rounded-md'>
          Start
        </Link>
      </section>

      <div className='sm:mx-48 mx-0'>
        <section className='p-3 text-left flex'>
          <h3 className='p-5 text-green-600 font-bold break-normal whitespace-nowrap'>Stap 1</h3>
          <h1 className='p-4 text-gray-600 font-light'>|</h1>
          <div>
            <h4 className='text-gray-600 font-semibold'>Formulier</h4>
            <p className='max-w-prose'>
              In het formulier vult u uw gegevens en voorkeuren in zodat wij een advies op maat kunnen geven. 
            </p>
          </div>
        </section>

        <section className='p-3 text-right flex flex-row-reverse'>
          <h3 className='p-5 text-green-600 font-bold whitespace-nowrap'>Stap 2</h3>
          <h1 className='p-4 text-gray-600 font-light'>|</h1>
          <div>
            <h4 className='text-gray-600 font-semibold'>Opties</h4>
            <p className='max-w-prose m-auto mr-0'>
              Op basis van uw gegevens en voorkeuren worden er een aantal daken weergegeven en waarom deze bij u zouden passen. 
              U kunt hierin een keuze maken en naar de volgende stap gaan.
            </p>
          </div>
        </section>

        <section className='p-3 text-left flex'>
          <h3 className='p-5 text-green-600 font-bold whitespace-nowrap'>Stap 3</h3>
          <h1 className='p-4 text-gray-600 font-light'>|</h1>
          <div>
            <h4 className='text-gray-600 font-semibold'>Vervolgstappen</h4>
            <p className='max-w-prose'>
              Hier vindt u alle informatie over het gekozen dak en hoe u hiermee aan de slag zou kunnen.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;

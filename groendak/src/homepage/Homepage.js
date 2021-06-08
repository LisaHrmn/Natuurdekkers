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

      <section className='m-auto p-3'>
        <h3 className='pt-3 text-green-600 font-semibold text-center'>Groene Daken</h3>
        <p className='p-2 max-w-prose m-auto'>
          Groene daken komen in alle vormen en maten. Zo zijn er verschillende mogelijkheden voor soorten beplanting, platte en hellende daken. 
          Een groendak heeft vele voordelen voor uw huis, zo zorgt het voor betere waterafvoer, warmte- en geluidsisolatie en verhoogt het de levensduur van uw dak. 
          Daarnaast draagt u bij aan een gezondere leefomgeving, beter milieu en meer biodiversiteit.
        </p>
        <p className='p-2 max-w-prose m-auto'>
          Mogelijk kunt u subsidie krijgen voor het aanleggen van een groendak. <a target='_blank' rel="noreferrer" className='text-green-600 hover:text-green-700 font-semibold' href="https://groenesubsidiewijzer.verbeterjehuis.nl/groenesubsidiewijzer/">Bekijk hier</a> de mogelijkheden bij uw gemeente.
        </p>
        <p className='p-2 max-w-prose m-auto pb-5'>
          Afhankelijk van de specificaties, spreken we over verschillende groene daken. Wij willen u helpen met het uitvinden welk groendak het beste bij uw wensen en situatie past. 
        </p>
        <p className='p-2 max-w-prose m-auto pb-5'>
          <a className='text-green-600 font-semibold hover:text-green-700' href='#types'>Hieronder</a> kunt u een kijkje nemen naar de verschillende groene daken en wat voor functie ze bieden voor uw dak en de natuur.
        </p>
        <p className='p-2 max-w-prose m-auto pb-5'>
          Ook kunt u een <a className='text-green-600 font-semibold hover:text-green-700' href='#stappenplan'>stappenplan</a> doorlopen om erachter te komen welk groen dak het best bij u zou passen en hoe u hiermee aan de slag zou kunnen. 
        </p>
      </section>

      <section className='p-3 font-bold text-center bg-gray-100' id='types'>
        <h3 className='pb-5 text-green-600 font-semibold'>Types</h3>
        <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls infinite>
          <div style={{height: '30rem'}}>
            <img src={eco} className='pb-2 m-auto sm:w-3/7 xl:w-1/4 h-auto object-contain' alt='Economisch groen dak'/>
            <p className='pb-7 text-green-700 font-semibold'>Economisch Groendak</p>
            <Link to='/Economisch' className='mb-3 py-2 px-8 px-none bg-green-600 hover:bg-green-800 text-gray-50 border-solid border-1 border-green-800 rounded-md'>
              Lees meer
            </Link>
          </div>
          <div style={{height: '28rem'}}>
            <img src={hellend} className='pb-2 m-auto sm:w-3/7 xl:w-1/4 h-auto object-contain' alt='Hellend groen dak'/>
            <p className='pb-7 text-green-700 font-semibold'>Hellend Groendak</p>
            <Link to='/Hellend' className='mb-3 py-2 px-8 px-none bg-green-600 hover:bg-green-800 text-gray-50 border-solid border-1 border-green-800 rounded-md'>
              Lees meer
            </Link>
          </div>
          <div style={{height: '28rem'}}>
            <img src={licht} className='pb-2 m-auto sm:w-3/7 xl:w-1/4 h-auto object-contain' alt='Licht gewicht groen dak'/>
            <p className='pb-7 text-green-700 font-semibold'>Lichtgewicht Groendak</p>
            <Link to='/Lichtgewicht' className='mb-3 py-2 px-8 px-none bg-green-600 hover:bg-green-800 text-gray-50 border-solid border-1 border-green-800 rounded-md'>
              Lees meer
            </Link>
          </div>
          <div style={{height: '28rem'}}>
            <img src={natuur} className='pb-2 m-auto sm:w-3/7 xl:w-1/4 h-auto object-contain' alt='Natuur groen dak'/>
            <p className='pb-7 text-green-700 font-semibold'>Natuur Groendak</p>
            <Link to='/Natuur' className='mb-3 py-2 px-8 px-none bg-green-600 hover:bg-green-800 text-gray-50 border-solid border-1 border-green-800 rounded-md'>
              Lees meer
            </Link>
          </div>
          <div style={{height: '28rem'}}>
            <img src={solar} className='pb-2 m-auto sm:w-3/7 xl:w-1/4 h-auto object-contain' alt='Solar groen dak'/>
            <p className='pb-7 text-green-700 font-semibold'>Solar Groendak</p>
            <Link to='/Solar' className='mb-3 py-2 px-8 px-none bg-green-600 hover:bg-green-800 text-gray-50 border-solid border-1 border-green-800 rounded-md'>
              Lees meer
            </Link>
          </div>
        </AliceCarousel>
      </section>

      <section className='p-3' id='stappenplan'>
        <h3 className='text-green-600 font-semibold text-center pt-5'>Stappenplan</h3>
        <p className='p-2 pb-5 max-w-prose m-auto'>
          Binnen drie stappen kunt u gratis uitvinden wat voor groendak het best bij uw wensen en situatie zou passen en hoe u hiermee aan de slag zou kunnen. 
          Bekijk de stappen hieronder of klik op start om te beginnen. 
        </p>
        <div className='text-center m-auto'>
          <Link to='/0' className='py-2 px-8 px-none bg-green-600 hover:bg-green-800 text-gray-50 border-solid border-1 border-green-800 rounded-md'>
            Start
          </Link>
        </div>
      </section>

      <div className='sm:mx-48 mx-0 pt-20'>
        <section className='p-5 text-left flex'>
          <h3 className='p-5 text-green-600 font-bold break-normal whitespace-nowrap'>Stap 1</h3>
          <h1 className='p-4 text-gray-600 font-light'>|</h1>
          <div>
            <h4 className='text-gray-600 font-semibold'>Formulier</h4>
            <p className='max-w-prose'>
              In het formulier vult u uw gegevens en voorkeuren in zodat wij een advies op maat kunnen geven. 
            </p>
          </div>
        </section>

        <section className='p-5 text-right flex flex-row-reverse'>
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

        <section className='p-5 pb-20 text-left flex'>
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

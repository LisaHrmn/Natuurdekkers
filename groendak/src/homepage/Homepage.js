import './Homepage.css';

function Homepage() {
  return (
    <div>

      <section>
        <h3 className='pt-3 text-green-600 font-semibold'>Groene Daken</h3>
        <p className='p-2 max-w-prose m-auto'>
          Groene daken komen in alle maten en vormen, zo zijn er verschillende mogelijkheden voor soorten beplanting en platte en hellende daken. 
          Een groendak heeft vele voordelen voor uw huis, zo zorgt een groendak voor betere waterafvoer en warmte- en geluidsisolatie en verhoogt het de levensduur van uw dak. 
          Daarnaast draagt een groendak bij aan een gezondere leefomgeving, beter milieu en meer biodiversiteit.
        </p>
        <p className='p-2 max-w-prose m-auto'>
          Mogelijk kunt u subsidie krijgen voor het aanleggen van een groendak, <a className='text-green-600 font-semibold' href="https://groenesubsidiewijzer.verbeterjehuis.nl/groenesubsidiewijzer/">bekijk hier</a> de mogelijkheden bij uw gemeente.
        </p>
        <p className='p-2 max-w-prose m-auto'>
          Afhankelijk van de specificaties, spreken we over verschillende groene daken. Wij willen u helpen met het uitvinden welk groendak het beste bij uw wensen en situatie past. 
          Hieronder kunt u een kijkje nemen naar de verschillende groene daken en een stappenplan doorlopen om erachter te komen welk groen dak het best bij u zou passen 
          en hoe u hiermee aan de slag zou kunnen. 
        </p>
      </section>

      <section>
        <h3 className='text-green-600 font-semibold'>Types</h3>
        <p>[insert cool looking slideshow]</p>
      </section>

      <section>
        <h3 className='text-green-600 font-semibold'>Stappenplan</h3>
        <p className='p-2 max-w-prose m-auto'>
          Binnen drie stappen kunt u gratis uitvinden wat voor groendak het best bij uw wensen en situatie zou passen en hoe u hiermee aan de slag zou kunnen. 
          Bekijk de stappen hieronder of klik op start om te beginnen. 
        </p>
      </section>

      <section>
        <h3 className='text-green-600 font-semibold'>Stap 1: Formulier</h3>
        <p className='p-2 max-w-prose m-auto'>
          In het formulier vult u uw gegevens en voorkeuren in zodat wij een advies op maat kunnen geven. 
        </p>
      </section>

      <section>
        <h3 className='text-green-600 font-semibold'>Stap 2: Opties</h3>
        <p className='p-2 max-w-prose m-auto'>
          Op basis van uw gegevens en voorkeuren worden er een aantal daken weergegeven en waarom deze bij u zouden passen. 
          U kunt hierin een keuze maken en naar de volgende stap.
        </p>
      </section>

      <section>
        <h3 className='text-green-600 font-semibold'>Stap 3: Vervolgstappen</h3>
        <p className='p-2 max-w-prose m-auto'>
          Hier vind u alle informatie over het gekozen dak en hoe u hiermee aan de slag zou kunnen.
        </p>
      </section>
    </div>
  );
}

export default Homepage;

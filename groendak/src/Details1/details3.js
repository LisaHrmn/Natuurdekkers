import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './details1.css';

import subplaceholder3 from "./images/sub-placeholder3.png";
import info from "./images/info.png";
import dak1 from "./images/natuur/dak1.png";
import dak2 from "./images/natuur/dak2.png";
import dak3 from "./images/natuur/dak3.png";
import dak4 from "./images/natuur/dak4.png";


function Details1() {
  return (
    // bavkground
    <div class="background">

      <div class="safespot">

        <div class="barrier"></div>
    
        {/* terug knop */}
        <a class=" text-2xl text-left underline pl-2" href="/">terug</a>

        {/* navigation row */}
        <div class="row">

          <div class="column2">
            <a href="/Solar"><img src= {subplaceholder3} alt="Solar" width="40" height="80"></img></a>
          </div>

          <div class="column2">
            <a href="/Hellend"><img src={subplaceholder3}  alt="Hellend" width="40" height="80"></img></a>
          </div>

          <div class="column1">
            <a href="/Natuur"><img src= {subplaceholder3} alt="Natuur" width="50" height="100"></img></a>
          </div>

          <div class="column2">
            <a href="/Lichtgewicht"><img src= {subplaceholder3} alt="Lichtgewicht" width="40" height="80"></img></a>
          </div>

          <div class="column2">
            <a href="/Economisch"><img src= {subplaceholder3} alt="Economisch" width="40" height="80"></img></a>
          </div>

        </div>

        {/* descriptie */}
        <h1 class=" text-left pl-9">Natuur groen dak</h1>

        <div class="break-words w-1/2 bg-gray-200 ml-auto rounded-l-lg inset-y-0 right-0 float-right">
          <h2 class="text-center">descriptie</h2>
          <p class="  p-2">Het natuur groendak is het meest biodiverse dak met opties voor allerlei plantensoorten als sedum, grassen, kruiden en bloemen. Het natuurdak heeft door de diversiteit vaak een dikkere onderlaag nodig waardoor het dak een hogere wateropname heeft maar ook een groter gewicht. Daarnaast heeft dit dak een hogere prijs en heeft het meer onderhoud nodig. Wel is dit dak ongetwijfeld de kleurrijkste en meest diverse optie en steunt het de biodiversiteit en wildleven als insecten in de omgeving het meest. </p>
        </div>

        {/* technische informatie */}
        <h2 class=" text-left text-green-600 pl-16">Technische informatie</h2>
        <div class="tooltip" ><img src={info} alt="placeholder" width="30" height="30"></img>
          <span class="tooltiptext">Gewicht: De draagkracht van het dak moet het gewicht van het groen aankunnen. Het gewicht is het verzadigd gewicht, oftewel het gewicht van het groendak als hij vol water staat.
            <br></br><br></br>
              Dakhelling: De dakhelling is in hoeveel graden het dak schuin kan zijn voor het groene dak. 
            <br></br><br></br>
              Plantensoort: Voor verschillende groene daken zijn verschillende soorten planten het meest geschikt. 
            <br></br><br></br>
              Prijs: De prijs is een schatting voor de aanleg in euro’s per vierkante meter. Dit kan best breed zijn omdat de dak specificaties hier nog invloed op kunnen hebben. Mogelijk kunt u ook subsidie krijgen voor het aanleggen van een groendak, bekijk hier de mogelijkheden in uw omgeving.
            <br></br><br></br>
              Waterbuffer: Dit is de hoeveelheid water in liter per vierkante meter het dak kan opslaan. Een goede waterbuffer voorkomt wateroverlast en overbelasting van het riool.
          </span>
        </div>
 
        <ul class=" text-left pl-9 pt-3 divide-y max-w-max">
          <ul class="text-left">Gewicht: vanaf 80kg/m2</ul>
          <ul class="text-left">Dakhelling: 0-5°</ul>
          <ul class="text-left">Plantensoort: Sedum-Gras-Kruiden-Bloemen</ul>
          <ul class="text-left">Prijs: €45-80 per m2</ul>
          <ul class="text-left">Waterbuffering: 30-70 liter per m2 </ul>
        </ul>
            
        {/* foto carousel */}
        <div className="text-center m-auto mt-20">
          <AliceCarousel autoPlay autoPlayInterval="5000" disableButtonsControls infinite animationDuration="1000" >   
            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak1} width="1200" height="800"></img>
            </div>

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak2} width="1200" height="800"></img>
            </div>

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak3} width="1200" height="800"></img>
            </div>

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak4} width="1200" height="800"></img>
            </div>
          </AliceCarousel>
        </div>

      </div>
    </div>
    
  );
}

export default Details1;

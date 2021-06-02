import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './details1.css';

import subplaceholder3 from "./images/sub-placeholder3.png";
import info from "./images/info.png";
import dak1 from "./images/eco/dak1.png";
import dak2 from "./images/eco/dak2.png";
import dak3 from "./images/eco/dak3.png";
import dak4 from "./images/eco/dak4.png";
import dak5 from "./images/eco/dak5.png";
import dak6 from "./images/eco/dak6.png";

function Details1() {
  return (
    // background
    <div class="background">

      <div class="safespot">

        <div class="barrier"></div>
      
        {/* terug knop */}
        <a class=" text-2xl text-left underline pl-2" href="/">terug</a>

        {/* navigator row */}
        <div class="row">

          <div class="column2">
          <a href="/Solar"><div class="tooltip" ><img src= {subplaceholder3} alt="Solar" width="40" height="80"></img><span class="tooltiptext2">Solar groendak</span></div></a>
          </div>
          
          
          <div class="column2">
            <a href="/Hellend"><div class="tooltip" ><img src= {subplaceholder3} alt="Hellend" width="40" height="80"></img><span class="tooltiptext2">Solar groendak</span></div></a>
          
          </div>

          <div class="column2">
            <a href="/Natuur"><div class="tooltip" ><img src= {subplaceholder3} alt="Natuur" width="40" height="80"></img><span class="tooltiptext2">Solar groendak</span></div></a>
          
          </div>

          <div class="column2">
            <a href="/Lichtgewicht"><div class="tooltip" ><img src= {subplaceholder3} alt="Lichtgewicht" width="40" height="80"></img><span class="tooltiptext2">Solar groendak</span></div></a>
         
          </div>

          <div class="column1">
            <a href="/Economisch"><div class="tooltip" ><img src= {subplaceholder3} alt="Economisch" width="50" height="100"></img><span class="tooltiptext2">Solar groendak</span></div></a>

          </div>

        </div>

        {/* descriptie */}
        <h1 class=" text-left pl-9">Economisch groen dak</h1>

        <div class="break-words w-1/2 bg-gray-200 ml-auto rounded-l-lg inset-y-0 right-0 float-right">
          <h2 class="text-center">descriptie</h2>
            <p class="  p-2">Een groendak is een slimme investering voor een dak. Het economisch groendak is een extra voordelig systeem met focus op een lage prijs. Er zijn voordelige mogelijkheden voor sedumtrays, sedummatten en sedumcassettes. Het economisch groendak is vaak wat meer werk om aan te leggen en in sommige gevallen kan het wat langer duren voordat het dak mooi groen is.  </p>
        </div>

        {/* technische informatie */}
        <h2 class=" text-left text-green-600 pl-16">technische informatie</h2>

  
        <ul class=" text-left pl-9 pt-3 divide-y max-w-max">
          <ul class="text-left">gewicht: vanaf 50kg/m2  <div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Gewicht: De draagkracht van het dak moet het gewicht van het groen aankunnen. Het gewicht is het verzadigd gewicht, oftewel het gewicht van het groendak als hij vol water staat.</span></div></ul>
          <ul class="text-left">Dakhelling: 0-5°<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext"> Dakhelling: De dakhelling is in hoeveel graden het dak schuin kan zijn voor het groene dak.</span></div></ul>
          <ul class="text-left">plantensoort: Sedum-Mos<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Plantensoort: Voor verschillende groene daken zijn verschillende soorten planten het meest geschikt. </span></div></ul>
          <ul class="text-left">Prijs: €25-55 per m2<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Prijs: De prijs is een schatting voor de aanleg in euro’s per vierkante meter. Dit kan best breed zijn omdat de dak specificaties hier nog invloed op kunnen hebben. Mogelijk kunt u ook subsidie krijgen voor het aanleggen van een groendak, bekijk hier de mogelijkheden in uw omgeving.</span></div></ul>
          <ul class="text-left">Waterbuffering: 20-30 liter per m2 <div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Waterbuffer: Dit is de hoeveelheid water in liter per vierkante meter het dak kan opslaan. Een goede waterbuffer voorkomt wateroverlast en overbelasting van het riool.</span></div></ul>
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

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak5} width="1200" height="800"></img>
            </div>

            <div>
              <img className="m-auto sm:w-1/3 h-auto object-contain" src={dak6} width="1200" height="800"></img>
            </div>
          </AliceCarousel>
        </div>
      
      </div>
    </div>    
  );
}

export default Details1;

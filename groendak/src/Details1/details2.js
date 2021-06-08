import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './details1.css';

import subplaceholder3 from "./images/sub-placeholder3.png";
import info from "./images/info.png";
import dak1 from "./images/licht/dak1.png";
import dak2 from "./images/licht/dak2.png";
import dak3 from "./images/licht/dak3.png";
import ecorow from "./images/ecorow2.png";
import hellendrow from "./images/hellendrow2.png";
import lichtrow from "./images/lichtrow2.png";
import natuurrow from "./images/natuurrow2.png";
import solarrow from "./images/solarrow2.png";

function Details1() {
  return (
    //background
    <div class="background">

      <div class="safespot">

        <div class="barrier"></div>

        {/* terug knop */}
        <a class=" text-2xl text-left underline pl-6" href="/">terug</a>

        {/* navigator row */}
        <div class="row">

<div class="column2">
<a href="/Solar"><div class="tooltip" ><img src= {solarrow} alt="Solar" width="80" height="120"></img><span class="tooltiptext2">Solar groendak</span></div></a>
</div>


<div class="column2">
  <a href="/Hellend"><div class="tooltip" ><img src= {hellendrow} alt="Hellend" width="80" height="120"></img><span class="tooltiptext2">Hellend groendak</span></div></a>

</div>

<div class="column2">
  <a href="/Natuur"><div class="tooltip" ><img src= {natuurrow} alt="Natuur" width="80" height="120"></img><span class="tooltiptext2">Natuur groendak</span></div></a>

</div>

<div class="column1">
  <a href="/Lichtgewicht"><div class="tooltip" ><img src= {lichtrow} alt="Lichtgewicht" width="120" height="180"></img><span class="tooltiptext2">Lichtgewicht groendak</span></div></a>

</div>

<div class="column2">
  <a href="/Economisch"><div class="tooltip" ><img src= {ecorow} alt="Economisch" width="80" height="120"></img><span class="tooltiptext2">Economish groendak</span></div></a>

</div>

</div>

        {/* descriptie */}
        <h1 class=" text-left pl-9">Lichtgewicht groen dak</h1>

        <div class="break-words w-1/2 bg-gray-200 ml-auto rounded-l-lg inset-y-0 right-0 float-right">
        <h2 class="text-left pl-4">Beschrijving</h2>
          <p class="  p-4 pt-2">Bij het lichtgewicht groendak wordt er extra focus gelegd op het gewicht van het groen, zodat het op de meeste daken mogelijk is. Vooral bij oudere huizen kan de draagkracht van het dak soms laag zijn waardoor een zwaar groendak niet mogelijk is. De vuistregel bij een lichtgewicht groendak is dat het voor elk dak dat door volwassene beloopbaar is dit dak kan dragen. Ondanks dat er bij dit dak op moet worden gelet dat het gewicht laag blijft zijn er hier ook goedkope opties. </p>
        </div>

        {/* technische informatie */}
        <h2 class=" text-left text-green-600 pl-16">technische informatie</h2>

 
        
        <ul class=" text-left pl-9 pt-3 divide-y max-w-max">
          <ul class="text-left">Gewicht: vanaf 50kg/m²  <div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Gewicht: De draagkracht van het dak moet het gewicht van het groen aankunnen. Het gewicht is het verzadigd gewicht, oftewel het gewicht van het groendak als hij vol water staat.</span></div></ul>
          <ul class="text-left">Dakhelling: 0-5°<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext"> Dakhelling: De dakhelling is in hoeveel graden het dak schuin kan zijn voor het groene dak.</span></div></ul>
          <ul class="text-left">Plantensoort: Sedum-Mos<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Plantensoort: Voor verschillende groene daken zijn verschillende soorten planten het meest geschikt. </span></div></ul>
          <ul class="text-left">Prijs: €25-55 per m²<div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Prijs: De prijs is een schatting voor de aanleg in euro’s per vierkante meter. Dit kan best breed zijn omdat de dak specificaties hier nog invloed op kunnen hebben. Mogelijk kunt u ook subsidie krijgen voor het aanleggen van een groendak, bekijk hier de mogelijkheden in uw omgeving.</span></div></ul>
          <ul class="text-left">Waterbuffering: 20-30 liter per m² <div class="tooltip" ><img src={info} alt="placeholder" width="15" height="15"></img> <span class="tooltiptext">Waterbuffer: Dit is de hoeveelheid water in liter per vierkante meter het dak kan opslaan. Een goede waterbuffer voorkomt wateroverlast en overbelasting van het riool.</span></div></ul>
        </ul>
            
        {/* foto carousel */}
        <div className="text-center m-auto mt-20 pb-20">
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
          </AliceCarousel>
        </div>
      
      </div>
    </div>
    
  );
}

export default Details1;
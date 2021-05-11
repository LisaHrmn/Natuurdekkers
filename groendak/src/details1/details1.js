import './details1.css';
import placeholder from './images/placeholder.png';
import subplaceholder1 from './images/subplaceholder1.png';
import subplaceholder2 from './images/subplaceholder2.png';
import subplaceholder3 from './images/subplaceholder3.png';

function Details1() {
  return (
    <div>
      <h1>This is detailpagina 1</h1>
      <h2>Economisch Groen Dak</h2>

<img class="topselector" src={subplaceholder1} alt="Placeholder" width="50" height="100"></img>
<img class="topselector" src={subplaceholder2} alt="Placeholder" width="75" height="150"></img>
<img class="topselector" src={subplaceholder3} alt="Placeholder" width="50" height="100"></img>


<div class="infotext">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, </p>
<button class="verder">VERDER</button>
</div>

<h3 class="techinfo">TECHNISCHE INFORMATIE</h3>
<ul>
    <ul>Gewicht : 90kg/m</ul>
    <ul>Systeemdikte : 80mm</ul>
    <ul>Dakhelling : 0 - 5</ul>
    <ul>vegatatie : Sedum-grassen-kruiden</ul>
    <ul>waterretentie : 50 - 60%</ul>
    <ul>afvoercoeffcient : C = 0,5</ul>
    <ul>waterbuffering : vanaf 35L/m</ul>
</ul>

<ul class="imagerow">
    <ul>
        <div class="gallery">
            <a target="_blank" href="images/placeholder.png">
              <img src={placeholder}alt="Cinque Terre" width="100" height="50"></img>
            </a>
            
          </div>
    </ul>
    <ul>
        <div class="gallery">
            <a target="_blank" href="images/placeholder.png">
              <img src={placeholder} alt="Cinque Terre" width="100" height="50"></img>
            </a>
            
          </div>
    </ul>
    <ul>
        <div class="gallery">
            <a target="_blank" href="images/placeholder.png">
              <img src={placeholder} alt="Cinque Terre" width="100" height="50"></img>
            </a>
            
          </div>
    </ul>
</ul>
<img src={placeholder} alt="Placeholder" width="500" height="300"></img>
    </div>
  );
}

export default Details1;

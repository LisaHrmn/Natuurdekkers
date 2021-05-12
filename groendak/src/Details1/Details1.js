import './Details1.css';
import placeholder from "./images/placeholder.png";
function Details1() {
  return (
    <div>
      <a class="terug" href="/">terug</a>
      <h1>Economish groen dak</h1>
<div class="div2"><p class="wb">dit is hele interessante informatie over heel interessante dingen</p>
           <button class="sb">verder</button> 
      </div>
      <h2 class= "td">technische informatie</h2>
      <ul>
        <ul class="ulbl">gewicht</ul>
        <ul class="ulbl">systeemdikte</ul>
        <ul class="ulbl">Dakhelling</ul>
        <ul class="ulbl">Vegetatie</ul>
        <ul class="ulbl">Waterretentie</ul>
        <ul class="ulbl">Afvoercoëfficient</ul>
        <ul class="ulbl">Waterbuffering</ul>
      </ul>
      
      {/* <div class="lbr"> */}
      <ul class= "ulr">
  <ul><div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={placeholder} alt="placeholder" width="300" height="200"></img>
  </a>
</div>
</ul>

<ul><div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={placeholder} alt="placeholder" width="300" height="200"></img>
  </a>
</div>
</ul>

<ul><div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={placeholder} alt="placeholder" width="300" height="200"></img>
  </a>
</div>
</ul>

</ul>
{/* </div> */}
      <img src={placeholder} alt="placeholder" width="400" height="200"></img>
    </div>
  );
}

export default Details1;

import './Details1.css';
import placeholder from "./images/placeholder.png";
import subplaceholder1 from "./images/sub-placeholder1.png";
import subplaceholder2 from "./images/sub-placeholder2.png";
import subplaceholder3 from "./images/sub-placeholder3.png";
function Details1() {
  return (
    <div>
    
      {/* <img class="rtl" src={placeholder} alt="placeholder" width="100" height="50"></img> */}
      <a class="terug" href="/">terug</a>

      <div class="row">
      <div class="column3">
    <a class= "arrow right" href="/"></a>
  </div>
  <div class="column2">
  <a href="/"><img src={subplaceholder1}  alt="Snow" width="40" height="80"></img></a>  
  </div>
  <div class="column1">
  <a href="/"><img src={subplaceholder2}  alt="Forest" width="50" height="100"></img></a>
  </div>
  <div class="column2">
  <a href="/"><img src= {subplaceholder3} alt="Mountains" width="40" height="80"></img></a>
  </div>
  <div class="column2">
    <a class= "arrow left" href="/"></a>
  </div>
</div>


<div class="div2"><p class="wb">dit is hele interessante informatie over heel interessante dingen</p>
           <button class="sb">verder</button> 
      </div>

      <h1>Economish groen dak</h1>


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
      
      
     
     <div class="row2">

    <div class="column4">
    <i class= "arrow right"></i>
    </div>

     <div class="column5">
      {/* <ul class= "ulr"> */}
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

<div class="column6">
    <i class= "arrow left"></i>
    </div>


{/* </ul> */}
</div>
      <div class= "gallery2"><img src={placeholder} alt="placeholder" width="400" height="200"></img></div>
      
      </div>
    </div>
  );
}

export default Details1;

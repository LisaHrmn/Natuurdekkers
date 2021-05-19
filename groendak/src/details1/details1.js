import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './details1.css';
import placeholder from "./images/placeholder.png";
import subplaceholder1 from "./images/sub-placeholder1.png";
import subplaceholder2 from "./images/sub-placeholder2.png";
import subplaceholder3 from "./images/sub-placeholder3.png";
function Details1() {
  return (
    <div class="background">
      <div class="safespot">
      <div class="barrier"></div>
    
      {/* <img class="rtl" src={placeholder} alt="placeholder" width="100" height="50"></img> */}
      <a class="text-left underline pl-2" href="/">terug</a>

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


<div class="div2">
  <h2>descriptie</h2>
  <p class="wb">dit is hele interessante informatie over heel interessante dingen</p>
           <button class="sb">verder</button> 
      </div>

      <h1 class="text-left pl-9">Economish groen dak</h1>


      <h2 class="text-left text-green-600 pl-16">technische informatie</h2>
      <ul class="text-left pl-9 pt-3 divide-y max-w-min">
        <ul class="text-left">gewicht</ul>
        <ul class="text-left">systeemdikte</ul>
        <ul class="text-left">Dakhelling</ul>
        <ul class="text-left">Vegetatie</ul>
        <ul class="text-left">Waterretentie</ul>
        <ul class="text-left">Afvoercoëfficient</ul>
        <ul class="text-left">Waterbuffering</ul>
      </ul>
      
      
     
  

    {/* <div class="column4">
    <i class= "arrow right"></i>
    </div> */}
      <AliceCarousel>
     {/* <div class="column5"> */}
      {/* <ul class= "ulr"> */}
  {/* <ul><div class="gallery">
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
</ul> */}

<div className="m-auto absolute inset-y-0 right-0 h-auto">
<img src={placeholder} alt="placeholder" width="300" height="200"></img>
<img src={placeholder} alt="placeholder" width="300" height="200"></img>
<img src={placeholder} alt="placeholder" width="300" height="200"></img>
</div>
<div className="m-auto absolute inset-y-0 right-0 h-auto">
<img src={placeholder} alt="placeholder" width="300" height="200"></img>
<img src={placeholder} alt="placeholder" width="300" height="200"></img>
<img src={placeholder} alt="placeholder" width="300" height="200"></img>
</div>


{/* </ul> */}
{/* </div> */}
</AliceCarousel>
{/* <div class="column6">
    <i class= "arrow left"></i>
    </div> */}
      <div class= "p-10"><img src={placeholder} alt="placeholder" width="600" height="300"></img></div>
      
      </div>
      </div>
    
  );
}

export default Details1;

import './stap1.css';

const generator = require('knear');

const k = 3;
const knn = new generator.kNear(k);

let gewichtEco;
let gewichtLicht;
let gewichtNatuur;
let i;
for (i = 0; i < 100; i++) {
  gewichtEco = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
  gewichtLicht = Math.floor(Math.random() * (6.5 - 4.5 + 1)) + 4.5;
  gewichtNatuur = Math.floor(Math.random() * (10 - 8 + 1)) + 8;

  knn.learn([gewichtEco, 2, 2, 1], "eco");
  knn.learn([gewichtLicht, 1, 1, 2], "licht");
  knn.learn([gewichtNatuur, 3, 5, 2], "natuur");
}

let prediction = knn.classify([9, 3, 5, 2]);
console.log(prediction)

function Stap1() {
  return (
    <div>
      <h1>This is Step one</h1>
    </div>
  );
}

export default Stap1;

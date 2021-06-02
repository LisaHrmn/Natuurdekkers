import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//images import
import plat from '../img/vlak.jpg'
import hellend from '../img/hellend2.jpg'

function Stap0() {
  return (
    <div className='text-center'>
      <h1 className='pt-3'>Voordat we beginnen...</h1>
      <h4 className='py-3'>Heeft u een plat dak, of een hellend dak?</h4>
      <div className='py-2 bg-gray-100'>
        <div className='pt-20 flex overflow-hidden'>
            <img src={plat} className='m-auto w-2/5 sm:w-1/3 h-auto transform hover:scale-125' alt='Plat dak'/>
            <img src={hellend} className='m-auto w-2/5 sm:w-1/3 h-auto transform hover:scale-125' alt='Hellend dak'/>
        </div>
          <div className="py-3 flex justify-around">
            <Link to={`/1/vlak`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>
              Plat dak <br/>
              (0 tot 5 graden)
            </Link>
            <Link to={`/1/helling`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-200 hover:bg-green-600'>
              Hellend dak <br/>
              (5 tot 35 graden)
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Stap0;

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
        <div className='pt-20 flex overflow-hidden justify-evenly'>
          <div className=''>
            <img src={plat} className='sm:w-1/4 h-auto transform hover:scale-125 z-50' alt='Plat dak'/>
            <Link to={`/1/vlak`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-100 hover:bg-green-600'>Plat dak</Link>
          </div>
          <div className=''>
            <img src={hellend} className='sm:w-1/4 h-auto transform hover:scale-125 z-50' alt='Hellend dak'/>
            <Link to={`/1/helling`} className='py-2 px-4 text-green-600 border border-green-600 rounded-md hover:text-gray-100 hover:bg-green-600'>Hellend dak</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stap0;

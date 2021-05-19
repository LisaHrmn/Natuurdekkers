import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
    return (
      <div className='p-3 bg-green-800 text-center'>
          <header>
            <h1 className='font-semibold text-gray-100'>Natuurdekkers</h1>
            <Link to='/' className='p-3'>Home</Link>| 
            <Link to='/0' className='p-2'>Step 0</Link>|
            {/* <Link to='/1' className="link">Step 1</Link> |  */}
            <Link to='/2' className='p-2'>Step 2</Link>| 
            <Link to='/3' className='p-2'>Step 3</Link>
          </header>
      </div>
    );
  }
  
  export default Header;
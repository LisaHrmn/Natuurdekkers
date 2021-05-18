import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <div className='p-2 bg-green-800'>
          <header>
            <h1 className='font-semibold text-gray-100'>Natuurdekkers</h1>
            <Link to='/' className="link">Home</Link> | 
            <Link to='/1' className="link">Step 1</Link> | 
            <Link to='/2' className="link">Step 2</Link> | 
            <Link to='/3' className="link">Step 3</Link>
          </header>
      </div>
    );
  }
  
  export default Header;
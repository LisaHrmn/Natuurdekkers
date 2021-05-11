import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <div>
          <header>
            <h1>Natuurdekkers</h1>
            <Link to='/' className="link">Home</Link> | 
            <Link to='/1' className="link">Step 1</Link> | 
            <Link to='/2' className="link">Step 2</Link> | 
            <Link to='/3' className="link">Step 3</Link>
          </header>
      </div>
    );
  }
  
  export default Header;
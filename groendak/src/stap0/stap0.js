import './stap0.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Stap0() {
  return (
    <div>
      <h1>This is Step 0</h1>
      <Link to={`/1/vlak`} className="link">Step 1</Link>
      <Link to={`/1/helling`} className="link">Step 1</Link>
    </div>
  );
}

export default Stap0;

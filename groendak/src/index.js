import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';

//components
import Homepage from './homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Stap0 from './stap0/stap0';
import Stap1 from'./stap1/stap1';
import Stap2 from'./stap2/stap2';
import Stap3 from'./stap3/stap3';
import Details1 from'./details1/details1';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='min-h-screen'>
        <title>Natuurdekkers</title>
        < Header />

        {/* Routes */}
        <Route exact path='/' render ={ props => (
          <Homepage />
        )}/>

        <Route path='/0' render={ props => (
          <Stap0 />
        )}/>

        <Route path='/1/:helling' render={ props => (
          <Stap1 {...props} />
        )}/>

        <Route path='/2' render={ props => (
          <Stap2 {...props} />
        )}/>

        <Route path='/3' render={ props => (
          <Stap3 />
        )}/>

        <Route path='/d1' render={ props => (
          <Details1 />
        )}/>

        < Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

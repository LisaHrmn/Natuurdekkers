import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='w-screen p-3 bg-gray-200 absolute bottom-0 left-0 w-full'>
        <footer>
          <h3 className='text-center text-green-600 font-semibold'>Contact</h3>
          <p className='text-center'>Groendak@gmail.com</p>
          <p className='text-center'>06 12345678</p>

          <div className='flex justify-between'>
            <p className='left-0 font-semibold'>&copy;CMGT Team 8 2021</p>
            <h5><Link className='font-semibold text-green-600 hover:text-green-700 mr-10' to='/handleiding'>Handleiding</Link></h5>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;
function Header() {
    return (
      <div className='pt-6 pb-7 bg-green-800 text-center'>
          <header className='m-auto sm:flex justify-between'>
            <a href="/"><h1 className='sm:pl-20 font-semibold text-gray-100'>Natuurdekkers</h1></a>
            <ul className='sm:mr-20 flex justify-evenly'>
              <li className='flex self-center hover:text-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className='pl-2'>groendak@gmail.com</p>
              </li>
              <li className='flex self-center pl-5 hover:text-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className='pl-2'>06 - 12345678</p>
              </li>
            </ul>
          </header>
      </div>
    );
  }
  
  export default Header;
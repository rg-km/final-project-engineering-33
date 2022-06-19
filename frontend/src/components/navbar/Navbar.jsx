import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='bg-cyan-800'>
        <div className="flex justify-between">
          <Link to='/' className='mt-3 ml-3 h-14' onClick={closeMobileMenu}>
              <img src="/images/logo.png" className='w-48' alt="" />
          </Link>
          <div className='navbar-container'>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/beasiswa'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Beasiswa
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/donatur'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Donatur
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex gap-2 items-center'>
                <Link
                  to='/profile'
                  className='flex text-white hover:border-b-4 hover:border-white px-3 py-1 hover:pb-3'
                  onClick={closeMobileMenu}
                >
                  <img src="./images/user.png" className='w-7 h-7' alt="" />
                  <p>nama user</p>
                </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

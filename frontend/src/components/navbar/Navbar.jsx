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
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/logo.png" className='w-48' alt="" />
          </Link>
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

            <li>
              <Link
                to='/profile'
                className='nav-links-mobile flex'
                onClick={closeMobileMenu}
              >
               <img src="./images/user.png" alt="" />
               <p>nama user</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

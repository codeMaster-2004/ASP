import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setOpenDropdown(null); // Close all openDropdown when mobile menu closes
  };

  //work to shut another open dropdown menu when a new one is toggled
  const toggleDropdown = (index) => {
    console.log(`Toggling dropdown ${index}`)
    setOpenDropdown(prevIndex => (prevIndex === index ? null : index));
  };
  
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

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

  ////////////////////////////////////////////////////// media navbar functions to adjust the height a looks according to what's done//////////////////////////////////////////////////////

  document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.fa-angle-down');
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    const navMenu = document.querySelector('.nav-menu');
  
    dropdownToggles.forEach((toggle, index) => {
      toggle.addEventListener('click', () => {
        const isOpen = toggle.classList.contains('rotate');
  
        // Close all dropdowns
        dropdownToggles.forEach((t) => t.classList.remove('rotate'));
        dropdownContents.forEach((content) => content.classList.remove('show'));
  
        if (!isOpen) {
          // Open the clicked dropdown
          toggle.classList.add('rotate');
          dropdownContents[index].classList.add('show');
  
          // Adjust height of nav-menu
          const dropdownHeight = dropdownContents[index].scrollHeight;
          navMenu.style.height = `${dropdownHeight + navMenu.scrollHeight}px`;
        } else {
          // Reset height of nav-menu
          navMenu.style.height = 'auto';
        }
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.nav-item')) {
        dropdownToggles.forEach((t) => t.classList.remove('rotate'));
        dropdownContents.forEach((content) => content.classList.remove('show'));
        navMenu.style.height = 'auto'; // Reset height of nav-menu
      }
    });
  });

  return(
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <div className='fably' />
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
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className={`nav-item ${openDropdown === 0 ? 'active' : ''}`}>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Aerosol Capture
              </Link>
              <i
                className={`fa fa-angle-down dropdown-arrow ${openDropdown === 0 ? 'rotate' : ''}`}
                onClick={() => toggleDropdown(0)}
              ></i>
              {openDropdown === 0 && (
                console.log("inside the Aerosol dropdown"),
                <div className={`dropdown-content ${openDropdown === 0 ? 'show' : ''}`}>
                  <Link to='/btrnsef' onClick={closeMobileMenu}>Battery Thermal Runaway Numerical Simulation of Electrodynamic Field</Link>
                  <Link to='/aerosol-concentration' onClick={closeMobileMenu}>Aerosol Concentration</Link>
                  <Link to='/dust-mitigation' onClick={closeMobileMenu}>Dust Mitigation</Link>
                  {console.log("done with it")}
                </div>
              )}
            </li>
            <li className={`nav-item ${openDropdown === 1 ? 'active' : ''}`}>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Battery Safety
              </Link>
              <i className={`fa fa-angle-down dropdown-arrow ${openDropdown === 1 ? 'rotate' : ''}`}
                onClick={() => toggleDropdown(1)}
                ></i>
                {openDropdown === 1 && (
                <div className={`dropdown-content ${openDropdown === 1 ? 'show' : ''}`}>
                  <Link to='/btrnsef' onClick={closeMobileMenu}>Battery Thermal Runaway Detection & Prevention</Link>
                </div>
                )}
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Facilities
              </Link>
            </li>
            <li className={`nav-item ${openDropdown === 2 ? 'active' : ''}`}>
              <Link
                to='/instrumentation'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Instrumentation
              </Link>
              <i
                className={`fa fa-angle-down dropdown-arrow ${openDropdown === 2 ? 'rotate' : ''}`}
                onClick={() => toggleDropdown(2)}
              ></i>
              {openDropdown === 2 && (
                <div className={`dropdown-content ${openDropdown === 2 ? 'show' : ''}`}>
                  <Link to='/aerosol-concentration' onClick={closeMobileMenu}>Aerosol Concentration</Link>
                  <Link to='/mcoes' onClick={closeMobileMenu}>Morphology Characterization with Optical Extinction Spectroscopy</Link>
                  <Link to='/pls' onClick={closeMobileMenu}>Polarized Light Scattering</Link>
                  <Link to='/sbps' onClick={closeMobileMenu}>Sedimentation based Particle Sizing</Link>
                </div>
              )}
            </li>
            <Button buttonStyle='btn--outline'>Contact Us</Button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
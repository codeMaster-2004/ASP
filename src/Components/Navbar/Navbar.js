import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import CustomLink from '../CustomLink/CustomeAtt';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setOpenDropdown(null); // Close all openDropdown when mobile menu closes
  };

  //work to shut another open dropdown menu when a new one is toggled
  const toggleDropdown = (index) => {
    setOpenDropdown(prevIndex => (prevIndex === index ? null : index));
  };
  
  // let lastScrollTop = 0;
  // const navbar = document.querySelector('.navbar');

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
      setClick(false);
    }
  };

  useEffect(() => {
    showButton();

    const handleScroll = () => {
      if (navbarRef.current) {
        const sticky = navbarRef.current.offsetTop;
        setIsSticky(window.pageYOffset > sticky);
      }
    };

    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  window.addEventListener('resize', showButton);

  ////////////////////////////////////////////////////// media navbar functions to adjust the height a looks according to what's done///////////////////////////////////////////////////////////

  
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
          <CustomLink to='/ASP' className='navbar-logo'>
            <img src={`${process.env.PUBLIC_URL}/images/Layer_1.png`}  alt='Nasa' width='35%' height='100%'/>
          </CustomLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <CustomLink
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </CustomLink>
            </li>
            <li className='nav-item'>
              <CustomLink
                to='/clients'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Clients
              </CustomLink>
            </li>
            <li className={`nav-item ${openDropdown === 3 ? 'active' : ''}`}>
              <CustomLink
                to='/products-services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </CustomLink>
              <i
                className={`fa fa-angle-down dropdown-arrow ${openDropdown === 3 ? 'rotate' : ''}`}
                onClick={() => toggleDropdown(3)}
              ></i>
              {openDropdown === 3 && (
                <div className={`dropdown-content ${openDropdown === 3 ? 'show' : ''}`}>
                  <CustomLink to='/facilities' onClick={closeMobileMenu}>Facilities</CustomLink>
                </div>
              )}
            </li>
            <li className={`nav-item ${openDropdown === 0 ? 'active' : ''}`}>
              <CustomLink
                to='/aerocapture'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Aerosol Capture
              </CustomLink>
              <i
                className={`fa fa-angle-down dropdown-arrow ${openDropdown === 0 ? 'rotate' : ''}`}
                onClick={() => toggleDropdown(0)}
              ></i>
              {openDropdown === 0 && (
                console.log("inside the Aerosol dropdown"),
                <div className={`dropdown-content ${openDropdown === 0 ? 'show' : ''}`}>
                    <CustomLink to='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field' onClick={closeMobileMenu}>Numerical Simulation of Electrodynamic Field</CustomLink>
                    <CustomLink to='/aerosol-concentration' onClick={closeMobileMenu}>Aerosol Concentration</CustomLink>
                    <CustomLink to='/dust-mitigation' onClick={closeMobileMenu}>Dust Mitigation</CustomLink>
                    {console.log("done with it")}
                </div>
              )}
            </li>
            <li className={`nav-item ${openDropdown === 1 ? 'active' : ''}`}>
              <CustomLink
                to='/batterysafety'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Battery Safety
              </CustomLink>
              <i className={`fa fa-angle-down dropdown-arrow ${openDropdown === 1 ? 'rotate' : ''}`}
                onClick={() => toggleDropdown(1)}
                ></i>
                {openDropdown === 1 && (
                <div className={`dropdown-content ${openDropdown === 1 ? 'show' : ''}`}>
                  <CustomLink to='/battery-thermal-runaway-detection-prevention' onClick={closeMobileMenu}>Battery Thermal Runaway Detection & Prevention</CustomLink>
                  <CustomLink to='/battery-thermal-management' onClick={closeMobileMenu}>Battery Thermal Management</CustomLink>
                </div>
                )}
            </li>
            <li className={`nav-item ${openDropdown === 2 ? 'active' : ''}`}>
              <CustomLink
                to='/optical-instrumentation'
                className={`nav-links ${openDropdown === 2 ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Instrumentation
              </CustomLink>
              <i
                className={`fa fa-angle-down dropdown-arrow ${openDropdown === 2 ? 'rotate' : ''}`}
                onClick={() => toggleDropdown(2)}
              ></i>
              {openDropdown === 2 && (
                <div className={`dropdown-content ${openDropdown === 2 ? 'show' : ''}`}>
                  <CustomLink to='/optical-instrumentation' onClick={closeMobileMenu}>Optical Instrumentation</CustomLink>
                  <CustomLink to='/morphology-characterization-optical-extinction-spectroscopy' onClick={closeMobileMenu}>Morphology Characterization with Optical Extinction Spectroscopy</CustomLink>
                  <CustomLink to='/polarized-light-scattering' onClick={closeMobileMenu}>Polarized Light Scattering</CustomLink>
                  <CustomLink to='/sedimentation-based-particle-sizing' onClick={closeMobileMenu}>Sedimentation based Particle Sizing</CustomLink>
                </div>
              )}
            </li>
            <CustomLink to='/contact-us' className='nav-button'>Contact Us</CustomLink>
          </ul> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;
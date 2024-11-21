import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import CustomLink from '../CustomLink/CustomeAtt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


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
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <CustomLink to='ASP' className={styles.navbarLogo}>
          <img src='./images/Layer_1.png'  alt='Nasa' width='55%' height='60%'/>
        </CustomLink>
        <div className={styles.menuIcon} onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={`${styles.navMenu} ${click ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <CustomLink to='/about' className={styles.navLinks} onClick={closeMobileMenu}>
              About
            </CustomLink>
          </li>
          <li className={styles.navItem}>
            <CustomLink to='/clients' className={styles.navLinks} onClick={closeMobileMenu}>
              Clients
            </CustomLink>
          </li>
          <li className={`${styles.navItem} ${openDropdown === 3 ? styles.active : ''}`}>
            <CustomLink to='/products-services' className={styles.navLinks} onClick={closeMobileMenu}>
              Products
            </CustomLink>
            <FontAwesomeIcon 
              icon={faAngleDown} 
              className={`${styles.dropdownArrow} ${openDropdown === 3 ? styles.rotate : ''}`}
              onClick={() => toggleDropdown(3)}
            />
            {openDropdown === 3 && (
              <div className={`${styles.dropdownContent} ${openDropdown === 3 ? styles.show : ''}`}>
                <CustomLink to='/facilities' onClick={closeMobileMenu}>Facilities</CustomLink>
              </div>
            )}
          </li>
          <li className={`${styles.navItem} ${openDropdown === 0 ? styles.active : ''}`}>
            <CustomLink
              to='/aerocapture'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Aerosol Capture
            </CustomLink>
            <FontAwesomeIcon 
              icon={faAngleDown} 
              className={`${styles.dropdownArrow} ${openDropdown === 0 ? styles.rotate : ''}`}
              onClick={() => toggleDropdown(0)}
            />
            {openDropdown === 0 && (
              // console.log("inside the Aerosol dropdown"),
              <div className={`${styles.dropdownContent} ${openDropdown === 0 ? styles.show : ''}`}>
                  <CustomLink to='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field' onClick={closeMobileMenu}>Numerical Simulation of Electrodynamic Field</CustomLink>
                  <CustomLink to='/aerosol-concentration' onClick={closeMobileMenu}>Aerosol Concentration</CustomLink>
                  <CustomLink to='/dust-mitigation' onClick={closeMobileMenu}>Dust Mitigation</CustomLink>
              </div>
            )}
          </li>
          <li className={`${styles.navItem} ${openDropdown === 1 ? styles.active : ''}`}>
            <CustomLink
              to='/batterysafety'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Battery Safety
            </CustomLink>
            <FontAwesomeIcon 
              icon={faAngleDown} 
              className={`${styles.dropdownArrow} ${openDropdown === 1 ? styles.rotate : ''}`}
              onClick={() => toggleDropdown(1)}
            />
              {openDropdown === 1 && (
              <div className={`${styles.dropdownContent} ${openDropdown === 1 ? styles.show : ''}`}>
                <CustomLink to='/battery-thermal-runaway-detection-prevention' onClick={closeMobileMenu}>Battery Thermal Runaway Detection & Prevention</CustomLink>
                <CustomLink to='/battery-thermal-management' onClick={closeMobileMenu}>Battery Thermal Management</CustomLink>
              </div>
              )}
          </li>
          <li className={`${styles.navItem} ${openDropdown === 2 ? styles.active : ''}`}>
            <CustomLink
              to='/optical-instrumentation'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Instrumentation
            </CustomLink>
            <FontAwesomeIcon 
              icon={faAngleDown} 
              className={`${styles.dropdownArrow} ${openDropdown === 2 ? styles.rotate : ''}`}
              onClick={() => toggleDropdown(2)}
            />
            {openDropdown === 2 && (
              <div className={`${styles.dropdownContent} ${openDropdown === 2 ? styles.show : ''}`}>
                <CustomLink to='/optical-instrumentation' onClick={closeMobileMenu}>Optical Instrumentation</CustomLink>
                <CustomLink to='/morphology-characterization-optical-extinction-spectroscopy' onClick={closeMobileMenu}>Morphology Characterization with Optical Extinction Spectroscopy</CustomLink>
                <CustomLink to='/polarized-light-scattering' onClick={closeMobileMenu}>Polarized Light Scattering</CustomLink>
                <CustomLink to='/sedimentation-based-particle-sizing' onClick={closeMobileMenu}>Sedimentation based Particle Sizing</CustomLink>
              </div>
            )}
          </li>
          <CustomLink to='/contact-us' className={styles.navButton}>Contact Us</CustomLink>
        </ul> 
      </div>
    </nav>
  );
}

export default Navbar;
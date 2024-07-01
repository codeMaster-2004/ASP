import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
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

  return(
    <div className="navbar-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="navbar-navbar">
        <div className="navbar-frame2">
            <div className="navbar-rectangle2">
            </div>
        </div>
        <div className="navbar-frame1">
          <span className="navbar-text">
            <span>Home</span>
          </span>
          <span className="navbar-text02">
            <span>About</span>
          </span>
          <span className="navbar-text04">
            <span>Battery Safety</span>
          </span>
          <span className="navbar-text06">
            <span>Aerosol Capture</span>
          </span>
          <span className="navbar-text08">
            <span>Instrumentation</span>
          </span>
          <span className="navbar-text10">
            <span>Facilities</span>
          </span>
          <div className="navbar-frame75">
            <span className="navbar-text12">
              <span>Contact Us</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
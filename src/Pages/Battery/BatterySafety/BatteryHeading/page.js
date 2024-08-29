import React from 'react';
import './page.css';
import { Link } from 'react-router-dom';
import "styled-components";

function BatteryHeading() {
  return (
    <div className='BatteryHeading'>
        <Link to='/batterysafety' style= {{textDecoration: "none"}}>
          <p className='orange-text'>Battery Safety</p>
        </Link>
        <h1>Battery Safety</h1>
        <img src={`${process.env.PUBLIC_URL}/images/batterytop.png`} alt="batterysafety" width="100%" height="100%"/>
    </div>
  )
}

export default BatteryHeading

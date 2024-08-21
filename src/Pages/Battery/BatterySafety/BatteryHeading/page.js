import React from 'react';
import './page.css';

function BatteryHeading() {
  return (
    <div className='BatteryHeading'>
        <p>Battery Safety</p>
        <h1>Battery Safety</h1>
        <img src={`${process.env.PUBLIC_URL}/images/batterytop.png`} alt="batterysafety" width="100%" height="100%"/>
    </div>
  )
}

export default BatteryHeading

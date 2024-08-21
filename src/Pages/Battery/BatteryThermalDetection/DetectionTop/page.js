import React from 'react';
import './page.css';

function BatteryDetectionTop() {
  return (
    <>
        <div className='management-container'>
            <p>Battery Safety</p>
            <h1>Battery Thermal Runaway Detection and Prevention</h1>
            <img src={`${process.env.PUBLIC_URL}/images/batterypack.png`} alt="batterysafety" width="100%" height="100%"/>
        </div>
        <div className='management-pre-text'>
          <p>
            Large battery packs for power intensive applications are often constructed by connecting smaller individual cells. These cells may heat up over time due to heat transfer from ambient hot air and due to various mechanisms such as resistive heating during battery charging and usage. The thermal management component of our solution ensures that the battery temperature remains within a target window to minimize cell degradation.
          </p>
          <p>
            This is accomplished by flowing a liquid heat transfer medium through channels that remain in thermal equilibrium with the cells. We recently performed a thermal analysis of the effect of flowing the liquid through channels that are located above and below the cells.
          </p>
        </div>
    </>
    
  )
}

export default BatteryDetectionTop

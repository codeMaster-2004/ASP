import React from 'react';
import './page.css';
import Separator from '../../../../Components/Orange-separator/separator';

function BatteryDetectionTop() {
  return (
    <div className="detection-prevention">
        <div className='detection-container'>
            <p>Battery Safety</p>
            <h1>Battery Thermal Runaway Detection and Prevention</h1>
            <img src={`${process.env.PUBLIC_URL}/images/BigBatteries.png`} alt="batteryputting" width="100%" height="100%"/>
        </div>
        <div className='detection-pre-text'>
            <p>
                We present test data demonstrating the effectiveness of our technology in preventing thermal runaway in a Li ion cell subjected to thermal abuse. We first performed a baseline test on a cylindrical 18650 Li ion cell in which we heated the cell at 3.8°C/min using heating tape mounted on the cell surface.
            </p>
            < Separator />
        </div>
        <div className='detection-top-image-desc'>
            <img src={`${process.env.PUBLIC_URL}/images/heatedat3.8.png`} alt="Graph 1" width="100%" height="100%" />
            <p>
                Data from a baseline thermal abuse test on cylindrical 18650 cell heated at 3.8°C/min.
            </p>
        </div>
    </div>
  )
}

export default BatteryDetectionTop
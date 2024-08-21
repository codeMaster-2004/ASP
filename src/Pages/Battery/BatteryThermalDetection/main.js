import React from 'react';
import BatteryDetectionTop from './DetectionTop/page';
import './main.css';
import BatteryDetectionBottom from './Detectionbody/page';

function BatteryThermalDetection() {
  return (
    <div className='thermaldetection'>
        <BatteryDetectionTop />
        <BatteryDetectionBottom />
    </div>
  )
}

export default BatteryThermalDetection

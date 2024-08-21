import React from 'react';
import './main.css';
import BatteryManagementTop from './Top/page';
import CFD from './CFDSimulations/page';

function BatteryThermalManagement() {
  return (
    <div className='batteryThermal'>
      < BatteryManagementTop />
      <CFD />
    </div>
  )
}

export default BatteryThermalManagement

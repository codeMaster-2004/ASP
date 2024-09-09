import React from 'react';
import './main.module.css'; 
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

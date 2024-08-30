import React from 'react';
import './main.css'; 
import { Link } from 'react-router-dom';
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

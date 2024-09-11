import React from 'react';
import styles from './main.module.css'; 
import BatteryManagementTop from './Top/page';
import CFD from './CFDSimulations/page';

function BatteryThermalManagement() {
  return (
    <div className={styles.batteryThermal}>
      < BatteryManagementTop />
      <CFD />
    </div>
  )
}

export default BatteryThermalManagement

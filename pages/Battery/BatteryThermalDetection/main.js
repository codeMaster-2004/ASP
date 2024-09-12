import React from 'react';
import BatteryDetectionTop from './DetectionTop/page';
import styles from './main.module.css';
import BatteryDetectionBottom from './Detectionbody/page';

function BatteryThermalDetection() {
  return (
    <div className={styles.thermaldetection}>
        <BatteryDetectionTop />
        <BatteryDetectionBottom />
    </div>
  )
}

export default BatteryThermalDetection

import React from 'react'
import styles from './main.module.css';
import BatteryHeading from './BatteryHeading/page';
import BatteryPara from './BatteryParagraph/page';

function BatterySafety() {
  return (
    <div className={styles.batterycontainer}>
        <BatteryHeading/>
        <BatteryPara/>
    </div>
  )
}

export default BatterySafety
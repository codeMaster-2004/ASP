import React from 'react'
import './main.css';
import BatteryHeading from './BatteryHeading/page';
import BatteryPara from './BatteryParagraph/page';

function BatterySafety() {
  return (
    <div className='batterycontainer'>
        <BatteryHeading/>
        <BatteryPara/>
    </div>
  )
}

export default BatterySafety

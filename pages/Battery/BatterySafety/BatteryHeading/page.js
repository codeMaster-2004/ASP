import React from 'react';
import styles from './page.module.css';
import CustomLink from '../../../src/Components/CustomLink/CustomeAtt';
import "styled-components";

function BatteryHeading() {
  return (
    <div className={styles.batteryHeading}>
        <CustomLink to='/batterysafety' style= {{textDecoration: "none"}}>
          <p className={styles.orangeText}>Battery Safety</p>
        </CustomLink>
        <h1>Battery Safety</h1>
        <img src='/images/batterytop.png' alt="batterysafety" width="100%" height="100%"/>
    </div>
  )
}

export default BatteryHeading

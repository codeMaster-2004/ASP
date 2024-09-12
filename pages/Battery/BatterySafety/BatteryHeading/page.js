import React from 'react';
import styles from './page.module.css';
import CustomLink from '../../../../Components/CustomLink/CustomeAtt';
import styled from 'styled-components';

function BatteryHeading() {
  return (
    <div className={styles.BatteryHeading}>
        <CustomLink to='/batterysafety' style= {{textDecoration: "none"}}>
          <p className={styles.orangeText}>Battery Safety</p>
        </CustomLink>
        <h1>Battery Safety</h1>
        <img src='/images/batterytop.png' alt="batterysafety" width="100%" height="100%"/>
    </div>
  )
}

export default BatteryHeading

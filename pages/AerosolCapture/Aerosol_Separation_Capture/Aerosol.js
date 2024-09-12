import React from 'react';
import styles from './Aerosol.module.css'; 
import AerosolIntro from './Aerosol_Intro/page';
import Innovation from './Innovation/page';

function Aerosol() {
  return (
    <div className={styles.SepAndCapture}>
        <AerosolIntro />
        <Innovation />
    </div>
  )
}

export default Aerosol

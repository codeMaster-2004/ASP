import React from 'react';
import MorphTop from './MorphTop/page';
import styles from './main.module.css';
import MorphBottom from './MorphBottom/page';

function Morphology() {
  return (
    <div className={styles.morphology}>
        <MorphTop />
        <MorphBottom />
    </div>
  )
}

export default Morphology

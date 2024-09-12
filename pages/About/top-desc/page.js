import React from 'react';
import styles from './page.module.css'; 

function Page() {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h1>
            Our vision is to <span className={styles.highlight}>translate</span> our deep <span className={styles.highlight}>knowledge</span> and combined <span className={styles.highlight}>experience</span> into commercially viable <span className={styles.highlight}>products and technologies</span> that make the world a safer place. 
          </h1>
        </div>
      </div>
      <div className={styles.exp}>
        <div className={styles.expContainer}>
          <div className={styles.founded}>
            <h1>Founded</h1>
            <p>2022</p>
          </div>
          <div className={styles.expText}>
            <h1>20-40+</h1>
            <p>years of experience</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
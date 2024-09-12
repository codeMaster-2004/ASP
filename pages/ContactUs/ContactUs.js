import React from 'react';
import styles from './ContactUs.module.css'; 
import ContactTop from './ContactTop/page';
import ContactBottom from './ContactForm/page';

function ContactUs () {
  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUsContainer}>
        <ContactTop />
        <div className={styles.formAndCirclesContainer}>
          <div className={styles.rightCircles}>
            <img src='/images/TopCirclesContact.png' alt='main' />
          </div>
          <ContactBottom />
          <div className={styles.leftCircles}>
            <img src='/images/bottomcircles.png' alt='main' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
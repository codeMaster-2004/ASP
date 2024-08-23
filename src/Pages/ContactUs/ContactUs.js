import React from 'react';
import './ContactUs.css';
import ContactTop from './ContactTop/page';
import ContactBottom from './ContactForm/page';

function ContactUs () {
  return (
    <div className="contactUs">
      <div className='contactUS-container'>
        <ContactTop />
        <div className='right-circles'>
          <img src={`${process.env.PUBLIC_URL}/images/TopCirclesContact.png`} alt='main' width='70%' height="70%"/>
        </div>
        <ContactBottom />
      </div>
      
    </div>
  )
}
export default ContactUs

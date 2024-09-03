import React from 'react';
import './ContactUs.css'; 
import ContactTop from './ContactTop/page';
import ContactBottom from './ContactForm/page';

function ContactUs () {
  return (
    <div className="contactUs">
      <div className='contactUS-container'>
        <ContactTop />
        <div className="form-and-circles-container">
          <div className='right-circles'>
            <img src={`${process.env.PUBLIC_URL}/images/TopCirclesContact.png`} alt='main' />
          </div>
          <ContactBottom />
          <div className='left-circles'>
            <img src={`${process.env.PUBLIC_URL}/images/bottomcircles.png`} alt='main' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUs

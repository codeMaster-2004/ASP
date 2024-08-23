import React from 'react';
import './ContactUs.css';
import ContactTop from './ContactTop/page';
import ContactBottom from './ContactForm/page';

function ContactUs () {
  return (
    <div className="contactUs">
      <ContactTop />
      {/* <div className='right-circles'>
        <img src={`${process.env.PUBLIC_URL}/images/TopCirclesContact.png`} alt='main' width='20%' height="20%"/>
      </div> */}
      <ContactBottom />
    </div>
  )
}
export default ContactUs

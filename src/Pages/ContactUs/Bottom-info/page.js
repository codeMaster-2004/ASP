import React from 'react';
import './page.css';

function ContactInfo() {
  return (
    <div className='Contact_fillout'>
        <div className='form-container'>
            <div className='top-info'>
                <form className='information'>
                    <input type='text' id='name' placeholder='Name'></input>
                    <input type='email' id='email' placeholder='Email'></input>
                    <input type='number' id='phone' placeholder='Phone Number' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                </form>
                <div className='message'>
                    <form className='message-form'>
                        <input type='text' id="message" placeholder='Message'></input>
                    </form>
                </div>
            </div>
            <button className='submit'>
                <p>Submit</p>
            </button> 
        </div>
        
    </div>
  )
}

export default ContactInfo

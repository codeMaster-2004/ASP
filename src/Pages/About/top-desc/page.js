import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

function page() {
  return (
    <>
      <div className='top'>
          <div className='huge-text'>
              <h1>About Us</h1>
          </div>
      </div>
      <div className='earth'>
        <div className='earth-text'>
          <div className='sep1'/>
          <div className='text'>
            <p>
              “Our vision is to translate our deep knowledge and combined experience into commercially viable products and technologies that make the world a safer place.” 
            </p>
          </div>
          <div className='sep2'/>
        </div>
      </div>
      <div className='black-background'>
        <div className='black-text'>
          <p>
            Led by four senior staff members, our exceptionally talented team excels in innovation. With vast domain expertise, we develop simple yet cutting-edge solutions to the complex challenges facing our industry.
          </p>
        </div>
      </div>
      <div className='exp'>
        <div className='exp-container'>
          <div className='founded'>
            <h1>Founded</h1>
            <p>2022</p>
          </div>
          <div className='exp-text'>
            <h2>25-40+</h2>
            <p>years of experience</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page

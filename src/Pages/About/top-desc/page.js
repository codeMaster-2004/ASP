import React from 'react';
import './page.css';

function page() {
  return (
    <>
      <div className='top'>
        <div className='top-left'>
          <h1>
            “Our vision is to <span className='highlight'>translate</span> our deep <span className='highlight'>knowledge</span> and combined <span className='highlight'>experience</span> into commercially viable <span className='highlight'>products and technologies</span> that make the world a safer place.” 
          </h1>
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

import React from 'react';
import './Aerosol.module.css'; 
import AerosolIntro from './Aerosol_Intro/page';
import Innovation from './Innovation/page';

function Aerosol() {
  return (
    <div className='SepAndCapture'>
        <AerosolIntro />
        <Innovation />
    </div>
  )
}

export default Aerosol

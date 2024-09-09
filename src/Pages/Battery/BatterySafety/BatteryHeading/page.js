import React from 'react';
import './page.module.css';
import CustomLink from '../../../../Components/CustomLink/CustomeAtt';
import "styled-components";

function BatteryHeading() {
  return (
    <div className='BatteryHeading'>
        <CustomLink to='/batterysafety' style= {{textDecoration: "none"}}>
          <p className='orange-text'>Battery Safety</p>
        </CustomLink>
        <h1>Battery Safety</h1>
        <img src={`${process.env.PUBLIC_URL}/images/batterytop.png`} alt="batterysafety" width="100%" height="100%"/>
    </div>
  )
}

export default BatteryHeading

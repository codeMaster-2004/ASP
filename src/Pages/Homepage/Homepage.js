import React from 'react';
import '../../App.css';
// import { Button } from '../../Components/Button/Button';
import Main from './PS-intro/page';
import Cards from './Cards/Cards';
import './HP.css';
import { Button } from '../../Components/Button/Button';

function Home() {
  return (
    <>
      <Main />
      <div className='main2'>
        <div className='clients-container'>
          <div className='clients'>
            <div className='heading'> 
              <h1>Our Clients</h1>
              <div className='separator'/>
            </div>
            <div className='clients-list'>
              <p>We provide contract R&D services to our government clients at the DOD and NASA. In the private sector, we provide licenses to our technologies that improve the product performance and process safety and help the industry in integrating/implementing these solutions.</p>
            </div>
          </div>
          <div className='logos'>
            <img src={`${process.env.PUBLIC_URL}/images/Nasa.png`}  alt='Nasa' width='70%' height='70%'/>
            <img src={`${process.env.PUBLIC_URL}/images/DoD.png`} alt='DOD' width='60%' height='60%'/>
          </div>
        </div>
          <Button buttonSize='btn--extralarge'
                  buttonStyle='btn--aerosol'
                  buttonType='client'>
                    Learn More
                  </Button>
        </div>
      <Cards />
    </>
  );
}

export default Home;
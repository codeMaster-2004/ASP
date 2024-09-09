import React from 'react';
// import '../../App.css';
// import { Button } from '../../Components/Button/Button';
import Main from './PS-intro/page';
import Cards from './Cards/Cards';
import './HP.module.css'; 
import CustomLink from '../../Components/CustomLink/CustomeAtt';

function Home() {
  return (
    <>
      <Main />
      <div className='client_home_intro'>
        <div className='main2'>
        <div className='clients-container'>
          <div className='clients'>
            <div className='heading'> 
              <h1>Our Clients</h1>
              <div className='home_client_separator'/>
            </div>
            <div className='clients-list'>
              <p>We provide contract R&D services to our government clients at the DOD and NASA. In the private sector, we provide licenses to our technologies that improve the product performance and process safety and help the industry in integrating/implementing these solutions.</p>
            </div>
          </div>
          <div className='logos'>
            <img src={`${process.env.PUBLIC_URL}/images/Nasa.png`}  alt='Nasa' width='100%' height='100%'/>
            <img src={`${process.env.PUBLIC_URL}/images/DoD.png`} alt='DOD' width='90%' height='90%'/>
          </div>
        </div>
          <CustomLink 
              to='/clients' 
              className='goto-client-button'
              >
              Learn more
          </CustomLink>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Home;